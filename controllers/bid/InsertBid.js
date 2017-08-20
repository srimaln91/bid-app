var bid = require("../../models/bid");
var property = require("../../models/property");
var errHandler = require("../../modules/ErrorHandler");

var controller = function (req, res, next) {
  var params = req.body;

  property.findById(params.propertyId, function (err, prop) {

    var newBid = new bid({
      value: params.value,
      date: new Date(),
      _property: prop,
      _user: params.userId
    });

    // save the bid and check for errors
    newBid.save(function (err, data) {
      if (err) {
        console.log(err);
        errHandler(res, err, "Error on update data", 500);
      }
      prop.bids.push(newBid);
      prop.save(function(err, newProperty) {

        property.findOne({_id: newProperty._id})
        .populate('bids', null, null, { sort: { 'value': -1 } })
        .exec(function (err, properties) {
          if (err) return handleError(err);
          res.json(properties);
        });
      });
      
    });

  });

};

module.exports = controller;
