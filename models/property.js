var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var propertySchema = new Schema({
  propertyId: String,
  title: String,
  address: String,
  startBid: Number,
  bids : [{type: mongoose.Schema.Types.ObjectId, ref:'Bid'}]
});

module.exports = mongoose.model('Property', propertySchema);
