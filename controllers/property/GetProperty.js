var property = require("../../models/property");
var errHandler = require("../../modules/ErrorHandler");

var controller = function (req, res, next) {

  property.find({})
    .populate('bids')
    .exec(function (err, properties) {
      if (err) return handleError(err);
      res.json(properties);
    });

};

module.exports = controller;
