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

const commentSchema = new mongoose.Schema({
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
}); 

const mergedSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    items: [itemSchema],
    comments: [commentSchema]
  });

const Item = mongoose.model('Ecommerceuser', mergedSchema);

module.exports = Item;