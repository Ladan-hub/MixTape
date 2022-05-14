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



router.get('/songs/:id', asyncHandler(async(req, res) => {
    // const user = req.session.auth
    // console.log(user)

    const song = await db.Song.findOne({
        where: {
            id: req.params.id,
        },
    });

    const tapes = await db.Tape.findAll({
      where:{
         userId: req.session.auth.userId
      }
    })

    if(song){
        res.render("song", { id: req.params.id, song, tapes })
    }else{
        next(taskNotFoundError(req.params.id));
    }
  }));

router.post('/songs/:id', asyncHandler(async(req, res) => {
    console.log('fetched songId--------------------------------------------------')
    const songId = req.params.id;

    const { tapeId } = req.body;

    // const tapeId = await Tape.findByPk(songId, {
    //     include: Playlist,
    // });
    const new_playlist = await db.Playlist.create({ songId, tapeId })
    res.redirect(`/songs/${songId}`)
    // console.log(new_playlist)
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
