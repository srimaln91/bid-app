var property = require("../../models/property");
var errHandler = require("../../modules/ErrorHandler");

var controller = function(req, res, next) {

  property.findById(req.params.id, function(err, oldProperty){

    if (err){
      errHandler(res, err, "Resource not found", 404);
    }

    oldProperty.title = req.body.title;
    oldProperty.address = req.body.address;
    oldProperty.startBid = req.body.startBid;

    oldProperty.save(function(err, update_info){
      if(err){res.send(err)}
      res.status(200).json(update_info);
    })

  });
};

module.exports = controller;
