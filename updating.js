const express = require('express');
const router = express.Router();
const Item = require('./schemes');

router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    const { name, product,quantity,phone } = req.body; 
  
   
    Item.findByIdAndUpdate(itemId, { name, product,quantity,phone }, { new: true })
      .then((updatedItem) => {
        if (!updatedItem) {
          return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(updatedItem);
      })
      .catch((error) => {
        res.status(500).json({ error: 'An error occurred while updating the item' });
      });
  });

  module.exports=router;