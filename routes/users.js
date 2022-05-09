var express = require('express');
var router = express.Router();
//const csrf = require('csurf');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/register', csrfProtection, (req,res) => {
  console.log('hello');
  const user = db.User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
})



module.exports = router;
