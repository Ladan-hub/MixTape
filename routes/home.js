const express = require("express");
const app = express();
const { Song } = require("../db/models");
const router = express.Router();



/* GET home page. */
router.get("/home", async function (req, res, next) {
  // 1. query for the data -> the joint table which user has which songs?

  // const popular = await Song.findAll({
  //   //include: songImg,
  //   limit: 8,
  //   order: [["listenCount", "DESC"]],
  // });

  // const current = await Song.findAll({
  //   //include: songImg,
  //   limit: 8,
  //   order: [["releaseDate", "DESC"]],
  // });

  res.render("home");
});

  
  

module.exports = router;
