const mongoose = require('mongoose');

const adminProductSchema = new mongoose.Schema({
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
  },
  image: {
    data: Buffer,
    contentType: String
  }
});

const AdminProduct = mongoose.model('AdminProduct', adminProductSchema);

module.exports = AdminProduct;
