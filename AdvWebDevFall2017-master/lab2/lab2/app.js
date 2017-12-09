
var express = require('express');      //This is what hosts the server
var path = require('path');            //This is the path
var favicon = require('serve-favicon');
var logger = require('morgan');        //This is only meant as a middle-ware (things that happen in between the request and response)
var cookieParser = require('cookie-parser'); //handles all cookies
var bodyParser = require('body-parser');  //handles all form data

var debug = require('debug')('demo:app'); //if you want to output anything use debug not logger (EXAM QUESTION)

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();    //Start the app and set up uses

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  debug('Time:', Date.now());
  next();
});

app.use('/', index); //assumes that what is being grabbed is a js file
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
