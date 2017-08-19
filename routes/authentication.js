var express = require('express');
var router = express.Router();
var index = require('../controllers/auth/authenticate');

router.route('/', index);

module.exports = router;
