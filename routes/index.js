const express = require("express");
const app = express();
const { Song } = require("../db/models");
const router = express.Router();

app.use((req, res, next) => {
  let { history } = req.session;
  if (!history) {
    history = [];
    req.session.history = history;
  }

  const url = "http://www.site.com/234234234";
  const getid = url.split("/");
  const id = getid.at(-1);

  history.unshift(id);
  next();
});

/* GET home page. */
router.get("/", async function (req, res, next) {
  // 1. query for the data -> the joint table which user has which songs?

  const popular = await Song.findAll({
    include: songImg,
    limit: 8,
    order: [["listenCount", "DESC"]],
  });

  const current = await Song.findAll({
    include: songImg,
    limit: 8,
    order: [["releaseDate", "DESC"]],
  });

  const recent = await Song.findAll({
    include: singImg,
    limit: 8,
    order: [[req.session.history]],
    
    // change the url so that when we visit our song page we store the page id in history
    // how to store that pageId into the history array
  });
  // 2. res.render to generate with that info being passed inside of an object
  console.log(req.session.history)
  res.render("index", { popular }, { current }, { recent });
});

module.exports = router;
