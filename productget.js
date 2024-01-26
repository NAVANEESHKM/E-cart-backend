const express = require('express');
const router1 = express.Router();
const Item = require('./ProductSchema');

// Define the route to retrieve an item by ID
router1.post('/all/productget', async (req, res) => {
  try {
    const item= await Item.collection.find({}).toArray();
  
    

    res.status(200).json(item); // Send the retrieved item as the response
  }catch (error) {
    console.error('Error retrieving item:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the item' });
  }
});

module.exports = router1;

