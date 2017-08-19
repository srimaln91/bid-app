var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var propertyBidSchema = new Schema({
    bidId: String,
    value: Number,
    date: Date,
    propertyId: Number,
})

module.exports = mongoose.model('bid', propertyBidSchema);
