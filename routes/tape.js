const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
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

// const inputValidators = [
//     check('username')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a valid value for Tape Name')
// ];

// read a list of tapes
router.get('/users/:id/tapes', asyncHandler(async (req, res) => {

    const userId = req.params.id;
    const tapes = await db.Tape.findAll({
        where: {
            userId
        }
    })

    if (tapes) {
        res.render('tapes-1', { userId, tapes })
    } else {
        next(taskNotFoundError(req.params.id));
    }

}));

// read all songs in a single tape
router.get('/users/:userId/tapes/:tapeId', asyncHandler(async (req, res) => {

    const userId = req.params.userId;
    const tapeId = req.params.tapeId;


    const tape = await db.Tape.findOne({
        where: {
            id: tapeId
        }
    })
    const playlists = await db.Playlist.findAll({

        include: [{ model: db.Song },
        {
            model: db.Tape,
            where: {
                id: tapeId
            },
        }]
    });

    if (playlists) {
        res.render('tapes-2', { playlists, tape })
    } else {
        next(taskNotFoundError(req.params.id));
    }


}))

// create a new tape, add a new tape button
router.post('/users/:id/tapes', asyncHandler(async (req, res) => {
    // router.post('/users/:id/tapes', csrfProtection, asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const { tapeName } = req.body

    const new_tape = await db.Tape.create({ tapeName, userId })
    res.redirect(`/users/${userId}/tapes`)

}))

//update a tape name
router.post('/users/:userId/tapes/:tapeId', asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const tapeId = req.params.tapeId;
    console.log("req.body", req.body)
    const { tapeName } = req.body;
    console.log("tapeName:", tapeName)
    const new_tapeName = tapeName;
    console.log('======================')
    console.log(userId)
    if (new_tapeName) {
        const tapeToUpdate = await db.Tape.findByPk(Number(tapeId))
        tapeToUpdate.tapeName = new_tapeName
        await tapeToUpdate.save()
        res.redirect(`/users/${userId}/tapes/${tapeId}`)
    } else {
        res.send('Error')
    }
}));



module.exports = router;
