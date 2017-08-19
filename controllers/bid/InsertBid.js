var bid = require("../../models/bid");
var property = require("../../models/property");
var errHandler = require("../../modules/ErrorHandler");

var controller = function(req, res, next) {
  var params = req.body;

  property.findById(params.propertyId, function(err, property){
    
    var newBid = new bid({
      value: params.value,
      date: new Date(),
      propertyId: property._id
    });

    // save the bid and check for errors
    newBid.save(function(err, data) {
      if (err){
        console.log(err);
        errHandler(res, err, "Error on update data", 500);
      }
      res.status(200).json(newBid);
    });

  });
  
};

module.exports = controller;
