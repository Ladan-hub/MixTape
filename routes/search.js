const express = require("express");
const Sequelize = require("sequelize");
const { asyncHandler, csrfProtection } = require("../ultils");
const db = require("../db/models/index");
const router = express.Router();

router.get(
  "/",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const songs = await db.Song.findAll({
      where: {
        [Op.or]: [
          { name: { [Sequelize.Op.iLike]: `%${req.query.search}%` } },
          { artistName: { [Sequelize.Op.iLike]: `%${req.query.search}%` } },
          { album: { [Sequelize.Op.iLike]: `%${req.query.search}%` } },
        ],
      },
      order: [["listenCount", "DESC"]],
    });
    res.render("searchres", {
      title: `Results for: %${req.query.search}%`,
      songs,
      csrfToken: req.csrfToken(),
    });
  })
);

module.exports = router;
