const express = require('express');
const router = express.Router();
const multer = require('multer');
const Item = require('./ProductSchema');

const storage = multer.memoryStorage(); // Use memory storage to store the image as Buffer
const upload = multer({ storage: storage });

router.post('/adminproduct', upload.single('image'), async (req, res) => {
  try {
    const { productname, benefits, unit, price } = req.body;
    const image = req.file;

    const newItem = new Item({
      productname,
      benefits,
      unit,
      price,
      image: {
        data: image ? image.buffer : null,
        contentType: image ? image.mimetype : null
      }
    });

    const insertOneResult = await newItem.save();

    console.log('Item saved successfully:', insertOneResult);
    res.status(200).json({ message: 'Item saved successfully', data: insertOneResult });
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: `An error occurred while saving the item: ${error.message}` });
  }
});

module.exports = router;
