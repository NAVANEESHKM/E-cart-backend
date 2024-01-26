const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const Item = require('./ProductSchema');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/adminproduct', upload.single('image'), async (req, res) => {
  try {
    const { productname, benefits, unit, price } = req.body;
    const image = req.file;

    const insertOneResult = await Item.collection.insertOne({
      productname,
      benefits,
      unit,
      price,
      imageUrl: image ? `uploads/${image.filename}` : null
    });

    console.log('Item saved successfully:', insertOneResult.ops);
    res.status(200).json({ message: 'Item saved successfully', data: insertOneResult.ops });
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: `An error occurred while saving the item: ${error.message}` });
  }
});

module.exports = router;
