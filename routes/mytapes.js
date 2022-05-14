const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');


​
router.get("/users/:id/tapes", asyncHandler(async(req, res) => {
​
    const userId = req.session.auth.userId
​
    // const tapes = await db.Tape.findAll({
    //     where: {
    //         userId
    //     }
    // })
​
  res.render("tapes", { userId });
}));


module.exports = router;
