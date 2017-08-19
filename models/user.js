var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  fullName: String,
  emailAddress: String,
  userName: String,
  password: String
})

module.exports = mongoose.model('user', userSchema);