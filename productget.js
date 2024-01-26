const express = require('express');
const router1 = express.Router();
const Item = require('./ProductSchema');
router1.post('/all/productget', async (req, res) => {
  try {
    const items = await Item.find();

    const itemsWithImages = items.map(item => {
      const images = Array.isArray(item.image) ? item.image : [item.image]; // Convert to array if it's not already

      const mappedImages = images.map(img => ({
        data: img.data.toString('base64'), // Convert Buffer to base64
        contentType: img.contentType
      }));

      return {
        _id: item._id,
        productname: item.productname,
        benefits: item.benefits,
        unit: item.unit,
        price: item.price,
        images: mappedImages
      };
    });

    res.status(200).json(itemsWithImages);
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the items', details: error.message });
  }
});


module.exports = router1;
