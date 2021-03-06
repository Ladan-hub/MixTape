const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

const taskNotFoundError = (id) => {
  const err = Error("Song not found");
  err.errors = [`Song with id of ${id} could not be found.`];
  err.title = "Song not found.";
  err.status = 404;
  return err;
};

router.get('/songs/:id', asyncHandler(async (req, res) => {
  const song = await db.Song.findOne({
    where: {
      id: req.params.id,
    },
  });

  const tapes = await db.Tape.findAll({
    where: {
      userId: req.session.auth.userId
    }
  });

  if (song) {
    res.render("songpage", { id: req.params.id, song, tapes })
  } else {
    next(taskNotFoundError(req.params.id));
  }
}));

router.post('/songs/:id', asyncHandler(async (req, res) => {
  const songId = req.params.id;
  const user = req.session.auth.userId;
  const demouserId = parseInt(req.session.auth.userId, 10);

  if(demouserId !== 1){
    const { tapeId } = req.body;
    if(tapeId){
      const new_playlist = await db.Playlist.create({ songId, tapeId });
    res.redirect(`/songs/${songId}`)
  } else {
      res.redirect(`/users/${user}/tapes`)
  }
} else {
    res.redirect('/');
  }
}));



module.exports = router;