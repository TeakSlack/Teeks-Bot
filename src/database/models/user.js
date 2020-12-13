const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userID: Number,
  username: String,
  lastResponseWithImage: Buffer,
  points: Number
});

const User = mongoose.model('user', userSchema);

module.exports = {
  User
};
