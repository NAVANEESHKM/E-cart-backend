

const express = require('express');
const router = express.Router();
const Item = require('./ProductSchema');

router.post('/adminproduct', async (req, res) => {
  try {
    const {productname, benefits, unit, price } = req.body;

    

    const insertOneResult = await Item.collection.insertOne({productname, benefits, unit, price});

    console.log('Item saved successfully:', insertOneResult.ops);
    res.status(200).json({ message: 'Item saved successfully da', data: insertOneResult.ops });
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: `An error occurred while saving the item: ${error.message}` });
  }
});

module.exports = router;
