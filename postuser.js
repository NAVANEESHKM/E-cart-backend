const express = require('express');
const router = express.Router();
const Item = require('./mergedschema');

router.post('/usernew', async (req, res) => {
  try {
    const {email,password ,items=[],comments=[]} = req.body;
    // Use insertOne to insert the document
    const insertOneResult = await Item.collection.insertOne({email,password,items,comments });

    console.log('Item saved successfully:', insertOneResult.ops);
    res.status(200).json({ message: 'Item saved successfully da', data: insertOneResult.ops });
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: `An error occurred while saving the item: ${error.message}` });
  }
});

module.exports = router;
