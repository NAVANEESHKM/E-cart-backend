const express = require('express');
const router = express.Router();
const Item = require('./mergedschema');


router.post('/comment', async(req, res) => {
  try{
    const { email,name, comment} = req.body;

    const existingUser = await Item.collection.findOne({ email });

   if (!existingUser) {
     // If no matching document is found, you can handle it as needed (e.g., return an error)
     return res.status(404).json({ message: 'Email not found' });
   }

   // If the email exists, update the document by pushing the new item into the 'items' array
   const updateResult = await Item.collection.updateOne(
     { email },
     { $push: { comments: { name, comment } } }
   );

   if (updateResult.modifiedCount === 0) {
     // If no document was modified, you can handle it as needed (e.g., return an error)
     return res.status(500).json({ message: 'Failed to update the document' });
   }

   res.status(200).json({ message: 'Item saved successfully' });
 } catch (error) {
   console.error('Error saving item:', error);
   res.status(500).json({ error: `An error occurred while saving the item: ${error.message}` });
 }
});


module.exports = router;
