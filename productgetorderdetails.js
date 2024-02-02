const express = require('express');
const router1 = express.Router();
const Item = require('./ProductSchema');
router1.post('/productgetorder', async (req, res) => {
    try {
      const productName = req.body.productname;
  
      if (!productName) {
        return res.status(400).json({ error: 'Product name is required in the request body' });
      }
  
      // Find item by product name with a timeout of 10 seconds
      const item = await Item.findOne({ productname: productName }).maxTime(10000);
  
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      const images = Array.isArray(item.image) ? item.image : [item.image];
      const imageInBase64 = images.map(img => img.data.toString('base64'));
  
      res.status(200).json({ images: imageInBase64 });
    } catch (error) {
      console.error('Error retrieving item:', error);
      res.status(500).json({ error: 'An error occurred while retrieving the item', details: error.message });
    }
  });
  

module.exports = router1;
