const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const { sessionSecret } = require('./config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const songsRouter = require('./routes/songs');
const homeRouter = require('./routes/home');
const tapesRouter = require('./routes/tape');
const aboutRouter = require('./routes/about');
//const myTapesRouter = require('./routes/mytapes');
const songlibraryRouter = require('./routes/songlibrary');
const searchRouter = require('./routes/search');

const csrf = require('csurf');
const { restoreUser } = require('./auth');

const app = express();

// this isn't touched
//this is a practice - pull request

// view engine setup
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

// create Session table if it doesn't already exist
store.sync();

// app.use('/', indexRouter);
app.use(restoreUser);
app.use(usersRouter);
app.use(songsRouter);
app.use(tapesRouter);
app.use(songlibraryRouter);
//app.use(myTapesRouter);
app.use(homeRouter);
app.use(aboutRouter);
app.use(searchRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err.message)
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;