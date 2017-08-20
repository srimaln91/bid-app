var express = require('express');
var router = express.Router();

var deleteProperty = require('../controllers/property/DeleteProperty');
var getProperty = require('../controllers/property/GetProperty');
var updateProperty = require('../controllers/property/UpdateProperty');
var insertProperty = require('../controllers/property/InsertProperty');

/* GET users listing. */
router.get('/', getProperty);
router.get('/:id', getProperty);
router.post('/', insertProperty);
router.delete('/:id', deleteProperty);
router.put('/:id', updateProperty);

module.exports = router;
