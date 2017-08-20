var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var propertyBidSchema = new Schema({
  value: Number,
  date: Date,
  _property: {type: mongoose.Schema.Types.ObjectId, ref:'Property'},
  _user: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Bid', propertyBidSchema);
