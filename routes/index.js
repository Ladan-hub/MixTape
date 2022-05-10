var express = require('express');
var router = express.Router();

const song = [
  {
    name: 'About Damn Time',
    listenCount: 35842774,
    releaseDate: 2022,
    artistName: "Lizzo",
    album: "About Damn Time",
    songImg: "https://i.scdn.co/image/ab67616d0000b2737bb9f03ad65d1bd0b656fe68",
    youtubeUrl: "https://youtu.be/IXXxciRUMzE"
  }];

/* GET home page. */
router.get('/', function(req, res, next) {
  // 1. query for the data -> the joint table which user has which songs?
  // 2. res.render to generate with that info being passed inside of an object
  
  res.render('index', { song });
});

module.exports = router;
