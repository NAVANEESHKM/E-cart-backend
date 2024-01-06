const express = require('express');
const router = express.Router();
const Item = require('./mergedschema');

router.post('/deleteorder', async (req, res) => {
  const phonedata = req.body.phone;
  const email = req.body.email;

  try {
    console.log('Deleting item with phone:', phonedata, 'for email:', email);

    // Check if a document with the specified email exists
    const existingUser = await Item.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: 'Email not found' });
    }

    // Use $pull to remove the item with the specified phone from the 'items' array
    const updateResult = await Item.updateOne(
      { email },
      { $pull: { items: { phone: phonedata } } }
    );

    if (updateResult.nModified === 0) {
      return res.status(500).json({ message: 'Failed to update the document' });
    }

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: `An error occurred while deleting the item: ${error.message}` });
  }
});

module.exports = router;
