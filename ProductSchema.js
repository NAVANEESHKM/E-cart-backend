const mongoose = require('mongoose');

const adminproductschema = new mongoose.Schema({
    productname: {
    type: String,
    required: true
  },
  benefits: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});




const Item = mongoose.model('AdminProduct', adminproductschema);

module.exports = Item;