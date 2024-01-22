const express = require('express');

const router = express.Router();
const Item = require('./AdminSchema');




router.post('/adminuser', async (req, res) => {
  try {
    const {email,password} = req.body;
  
    // Use insertOne to insert the document
    const insertOneResult = await Item.collection.findOne({email,password });
    if (!insertOneResult) {
        return res.status(404).json({ message: 'Item not Found' });
      }
	
    console.log('Item saved successfully:', insertOneResult.ops);
    res.status(200).json({ message: 'Item Found', data: insertOneResult.ops,token:val });
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: `An error occurred while saving the item: ${error.message}` });
  }
});

module.exports = router;
