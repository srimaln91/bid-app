var bid = require("../../models/bid");
var errHandler = require("../../modules/ErrorHandler");

var controller = function(req, res, next) {

  bid.find({propertyId : req.body.propertyId})
  .sort({ value: -1 })
  .exec(function(err, data){
    res.json(data);
  });

};

module.exports = controller;
