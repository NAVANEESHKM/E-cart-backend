const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image:{
    data:Buffer,
    ContentType:String
  }
});



module.exports = ImageModel=mongoose.model('imageModel', ImageSchema);