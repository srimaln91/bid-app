var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var propertySchema = new Schema({
    propertyId: String,
    title: String,
    address: String,
    startBid: Number,
});

module.exports = mongoose.model('property', propertySchema);
