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
router.get('/song', asyncHandler(async (req, res) => {
    const songId = req.params.id
    res.render("song", {})
}))
router.get('/song/:id', asyncHandler(async (req, res) => {
    const song = await Song.findOne({
        where: {
            id: req.params.id,
        },
    });
    if (song) {
        res.render("song", { id: req.params.id }) ////////
    } else {
        next(taskNotFoundError(req.params.id));
    }
}));
router.post('/song/:id', asyncHandler(async (req, res) => {
    const songId = req.params.id;
    const tapeId = await Tape.findByPk(songId, {
        include: Playlist,
    });
    const new_playlist = await db.playlist.create({ songId, tapeId })
}));
// get the userId through the session, query the playlist through user table
//   const userId = req.session.auth.userId
//   const playlist = await User.findByPk(userId, {
//       include: {
//           model: Tape,
//           include: { model: Playlist}
//       }
//     });
//   const {} = req.body
module.exports = router;