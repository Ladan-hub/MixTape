const express = require("express");
//const { mapOptionFieldNames } = require("sequelize/types/lib/utils");
const app = express();
//const { Song } = require("../db/models");
const db = require('../db/models');
const router = express.Router();



/* GET home page. */
router.get("/home", async function (req, res, next) {
  // 1. query for the data -> the joint table which user has which songs?

  const topHits = await db.Song.findAll({
    limit: 12,
    order: [["listenCount", "DESC"]],
  });

  const recentReleases = await db.Song.findAll({
    limit: 12,
    order: [["releaseDate", "DESC"]],
  });

  res.render("home", {topHits, recentReleases});
  
});

  
  

module.exports = router;
