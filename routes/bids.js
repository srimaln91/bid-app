var express = require('express');
var router = express.Router();

var deleteBid = require('../controllers/bid/DeleteBid');
var getBid = require('../controllers/bid/GetBids');
var updateBid = require('../controllers/bid/UpdateBid');
var insertBid = require('../controllers/bid/InsertBid');

router.get('/', getBid);
router.post('/', insertBid);
router.delete('/', deleteBid);
router.put('/', updateBid);

module.exports = router;
