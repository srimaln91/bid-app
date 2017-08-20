var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var config = require('../../config/config');
var user = require('../../models/user');

var authController = function (req, res, next) {

  if (!req.body) {
    res.sendStatus(400);
  }

  user.findOne({ "userName": req.body.userName }, function (err, user) {
    if (err) {
      res.status(500).json({ "success": false, "message": err });
    }
    else {
      if (user) {

        bcrypt.compare(req.body.password, user.password, function (err, status) {
          if (status) {

            var token = jwt.sign(user, config.secret, {
              expiresIn: 60 * 60 // expires in 24 hours
            });

            res.status(200).json({ "success": true, "token": token, "user": {
              "_id": user._id,
              "fullName": user.fullName,
              "userName": user.userName,
              "email": user.email
            }});

          } else {
            res.status(200).json({ "success": false, "message": "Authentication error" });
          }

        });

      } else {
        res.status(200).json({ "success": false, "message": "Authentication error" });
      }
    }
  })
};

module.exports = authController;
