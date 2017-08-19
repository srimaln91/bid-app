var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var config = require('./config/config');
var index = require('./routes/index');
var bids = require('./routes/bids');
var authentication = require('./routes/auth');
var property = require('./routes/property');
var checkToken = require('./middlewares/auth');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/auth', authentication);
app.use('/bids', checkToken, bids);
app.use('/property', checkToken, property);

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

  // Respond with error
  res.status(err.status || 500);
  res.json({"success":false, "message":"Invalid request"});

});

//var uri = "mongodb://srimal:srimal123@ds147520.mlab.com:47520/tododata";
mongoose.connect(config.database.connectionString, {
  useMongoClient: true,
});

// Start the HTTP server once the app successfully connected to the Mongo DB
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection opened');

  //If the database connection is ok, start listening
  app.listen('3100', function(){
    console.log("Listening on port 3100");
  });

}); 
