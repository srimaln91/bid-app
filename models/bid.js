var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var propertyBidSchema = new Schema({
    value: Number,
    date: Date,
    propertyId: String,
});

module.exports = mongoose.model('bid', propertyBidSchema);
