var property = require("../../models/property");
var errHandler = require("../../modules/ErrorHandler");

var controller = function (req, res, next) {
  var params = req.body;

  var newProperty = new property({
    title: params.title,
    address: params.address,
    startBid: params.startBid
  });

  // save the property and check for errors
  newProperty.save(function (err, data) {
    if (err) {
      errHandler(res, err, "Error on update data", 500);
    }
    res.status(200).json(newProperty);
  });
};

module.exports = controller;
