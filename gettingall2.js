const express = require('express');
const router1 = express.Router();
const Item = require('./mergedschema');

// Define the route to retrieve an item by ID
router1.post('/all/comment', async (req, res) => {
  const {email}=req.body
  try {
    const item = await Item.collection.findOne({email:email});
  
    

    res.status(200).json(item); // Send the retrieved item as the response
  }catch (error) {
    console.error('Error retrieving item:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the item' });
  }
});

module.exports = router1;

