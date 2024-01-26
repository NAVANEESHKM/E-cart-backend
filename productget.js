const express = require('express');
const router1 = express.Router();
const Item = require('./ProductSchema');

router1.post('/all/productget', async (req, res) => {
  try {
    // Retrieve items from the database
    const items = await Item.find();

    // Map the items to include the image data
    const itemsWithImages = items.map(item => {
      const images = item.image || []; // Assuming 'image' is an array

      // Map the images in the array
      const mappedImages = images.map(img => {
        return {
          data: img.data.toString('base64'), // Convert Buffer to base64
          contentType: img.contentType
        };
      });

      return {
        productname: item.productname,
        benefits: item.benefits,
        unit: item.unit,
        price: item.price,
        images: mappedImages
      };
    });

    res.status(200).json(itemsWithImages); // Send the retrieved items with images as the response
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the items' });
  }
});

module.exports = router1;
