const express = require("express");
//const { mapOptionFieldNames } = require("sequelize/types/lib/utils");
const app = express();
//const { Song } = require("../db/models");
const db = require('../db/models');
const router = express.Router();



/* GET songs page. */
router.get("/songs", async function (req, res, next) {
    // 1. query for all of the songs in the database 
  
    const allSongs = await db.Song.findAll({
      order: [["releaseDate", "DESC"]],
    });
    //console.log(topHits[0].songImg,"HERE");
  
    res.render("songlibrary", { allSongs });
    
  });







module.exports = router;
