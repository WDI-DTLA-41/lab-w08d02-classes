var mongoose = require('mongoose');

var kittenSchema = new mongoose.Schema({
  name: String,
  _id: Number,
  img: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Kitten', kittenSchema);
