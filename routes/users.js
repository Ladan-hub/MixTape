const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');
const bcrypt = require('bcryptjs');
// const { route, getMaxListeners } = require('../app');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});

const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for User Name')
    .isLength({ max: 50 })
    .withMessage('User Name must not be more than 50 characters long'),
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long'),
];

router.post('/register', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      username,
      emailAddress,
      password
    } = req.body;


    const user = db.User.build({
      username,
      email: emailAddress,
      // hashedpassword: hashedPassword
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedpassword = hashedPassword;
      await user.save();
      res.redirect('/login');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});

const loginValidators = [
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];


router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      emailAddress,
      password,
    } = req.body;
    let errors = [];
    const validatorErrors = validationResult(req);
    const user = await db.User.findOne({ where: { email: emailAddress } });
    if (validatorErrors.isEmpty()) {
      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedpassword.toString());
        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect('/home');
        }
      }
      errors.push('Login failed for the provided email address and password');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-login', {
        title: 'Login',
        emailAddress: user.email,
        errors,
        csrfToken: req.csrfToken(),
      });
    }

  }));


router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/login');
});

router.get('/guest', async (req, res) => {
  // res.redirect('/home');
  const demoUser = await db.User.findOne({ where: { email: 'santaclara@gmail.com' } })
  loginUser(req, res, demoUser);
  return res.redirect('/register');
});

router.get('/cancel', (req, res) => {
  res.redirect('/login');
});




module.exports = router;
