const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});




const Item = mongoose.model('Adminpage', adminschema);

module.exports = Item;