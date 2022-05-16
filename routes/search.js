const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const {Op} = require('sequelize');

const taskNotFoundError = (input) => {
    const err = Error("Song not found");
    err.errors = [`Cannot find a song that contains ${input}`];
    err.title = "Song not found.";
    err.status = 404;
    return err;
};

router.post('/search', asyncHandler(async(req,res,next)=> {
    const {searchInput} = req.body;
    console.log(req.body);

    const songs = await db.Song.findAll({
        where: {
            name: {
                [Op.iLike]: `%${searchInput}%`
            }
        }
    })
    if (songs.length === 1) {
        res.redirect(`/songs/${songs[0].id}`)
    } else {
        res.render("results", {songs});
    }

}))

module.exports = router;