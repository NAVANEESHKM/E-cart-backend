const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  product:{
    type:String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  phone:{
    type:Number,
    required:true
  }
  // Add other properties as needed
}); 

const Item = mongoose.model('customerdetails', itemSchema);

module.exports = Item;