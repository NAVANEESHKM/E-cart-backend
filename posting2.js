const express = require('express');
const router = express.Router();
const Item = require('./schemes2');


router.post('/comment', (req, res) => {
    const { name, comment} = req.body;
  
    const newItem = new Item({
      name,
      comment
    });
  
    newItem.save()
      .then(() => {
        console.log('Item saved successfully');
        res.status(200).json({ message: 'Item saved successfully' });
      })
      .catch((error) => {
        console.error('Error saving item:', error);
        res.status(500).json({ error: 'An error occurred while saving the item' });
      });
      
  });

  module.exports = router;