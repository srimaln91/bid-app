var express = require('express');
var router = express.Router();
var authenticateUser = require('../controllers/auth/authenticate');

router.get('/', authenticateUser);

module.exports = router;
