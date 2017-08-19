var property = require("../../models/property");
var errHandler = require("../../modules/ErrorHandler");

var controller = function(req, res, next) {
  
  property.find(function(err, data) {
    if (err){
      errHandler(res, err, "Error on retrive data", 500);
    }
    res.json(data);
  });

};

module.exports = controller;
