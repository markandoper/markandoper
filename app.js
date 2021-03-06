var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var member = require('./routes/member');
var inventory = require('./routes/inventory');
var salereport = require('./routes/salereport');
var purchase = require('./routes/purchase');
var rank_one =require('./routes/rank_one');
var rank_two =require('./routes/rank_two');
var rank_three =require('./routes/rank_three');
var info = require('./routes/info');

// var for_member = require('./routes/for_member');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/member', member);
app.use('/inventory', inventory);
app.use('/salereport', salereport);
app.use('/purchase', purchase);
app.use('/rank_one',rank_one);
app.use('/rank_two',rank_two);
app.use('/rank_three',rank_three);
app.use('/info',info);
// app.use('/for_member', for_member);


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
