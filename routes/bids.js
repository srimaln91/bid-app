var express = require('express');
var router = express.Router();

var deleteBid = require('../controllers/bids/DeleteBid');
var getBid = require('../controllers/bids/GetBids');
var updateBid = require('../controllers/bids/UpdateBid');

/* GET users listing. */
router.get('/', getBid);
router.post('/', updateBid);
router.delete('/', deleteBid);

module.exports = router;
