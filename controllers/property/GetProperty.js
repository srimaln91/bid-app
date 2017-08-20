var property = require("../../models/property");
var errHandler = require("../../modules/ErrorHandler");

var controller = function (req, res, next) {
  
  //Find and respond with one property
  if(req.params.id != undefined ){
    
    params = { _id: req.params.id };

    property.findOne(params)
    .populate('bids', null, null, { sort: { 'value': -1 } })
    .exec(function (err, properties) {
      if (err) return handleError(err);
      res.json(properties);
    });

  }
  //Respond with all properties
  else{
    property.find({})
    .populate('bids', null, null, { sort: { 'value': -1 } })
    .exec(function (err, properties) {
      if (err) return handleError(err);
      res.json(properties);
    });
  }

};

module.exports = controller;
