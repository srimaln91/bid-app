var jwt = require('jsonwebtoken');
var config = require('../../config/config');
var user = require('../../models/user');

var authController = function(req, res, next) {

  if(!req.body){
    res.sendStatus(400);
  }

  user.findOne({"userName": req.body.userName, "password": req.body.password}, function(err, user){
    if(err){
      res.status(500).json({"success": false, "message": err});
    }
    else{
      if(user){
      
        // if user is found and password is right
        // generate an access token
        var token = jwt.sign(user, config.secret, {
          expiresIn: 60*60 // expires in 24 hours
        });

        res.status(200).json({"success":true, "token":token, "user": user});
      }else{
        res.status(200).json({"success": false, "message":"Authentication error"});
      }
    }
  })
};

module.exports = authController;
