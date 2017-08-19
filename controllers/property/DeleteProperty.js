var property = require("../../models/property");
var errHandler = require("../../modules/ErrorHandler");

var controller = function(req, res, next) {
  property.findByIdAndRemove(req.params.id, function(err, result){

    if (err || result == null){
      errHandler(res, err, "Resource not found", 404);
      res.end();
    }
    else{
      res.status(200).json(result);
    }
  })
};

module.exports = controller;
