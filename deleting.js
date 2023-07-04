const express = require('express');
const router = express.Router();
const Item = require('./schemes');



router.delete('/:id', (req, res) => {
  const itemId = req.params.id;
  console.log(itemId);
  Item.findByIdAndDelete(itemId)
    .then((deletedItem) => {
      if (!deletedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.status(200).json({ message: 'Item deleted successfully' });
    })
    .catch((error) => {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'An error occurred while deleting the item' });
    });
});

module.exports=router;