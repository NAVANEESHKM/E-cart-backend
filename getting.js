const express = require('express');
const router1 = express.Router();
const Item = require('./schemes');


router1.get('/:id', async (req, res) => {
  try {
    const itemId = req.params.id;

    const item = await Item.findOne({ _id: itemId });

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(item); 
  } catch (error) {
    console.error('Error retrieving item:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the item' });
  }
});

module.exports = router1;
