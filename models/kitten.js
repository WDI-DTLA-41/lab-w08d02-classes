var mongoose = require('mongoose');

var kittenSchema = new mongoose.Schema({
  name: String,
  img: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Kitten', kittenSchema);
