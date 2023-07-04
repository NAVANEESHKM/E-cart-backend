const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('commentcollec', itemSchema);