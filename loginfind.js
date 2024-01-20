const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const Item = require('./mergedschema');

const mySigningKey = 'your_secret_key'; // Replace with your actual secret key

function createToken(email,expiration) {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + expiration, // Expiration time in seconds
      iat: Math.floor(Date.now() / 1000),
      email: email,
    },
    mySigningKey,
    { algorithm: 'HS256' }
  );

  return token;
}

router.post('/loginuser', async (req, res) => {
  try {
    const {email,password} = req.body;
  
    // Use insertOne to insert the document
    const insertOneResult = await Item.collection.findOne({email,password });
    if (!insertOneResult) {
        return res.status(404).json({ message: 'Item not Found' });
      }
	
   let val=createToken(email,300)
    console.log('Item saved successfully:', insertOneResult.ops);
    res.status(200).json({ message: 'Item Found', data: insertOneResult.ops,token:val });
  } catch (error) {
    console.error('Error saving item:', error);
    res.status(500).json({ error: `An error occurred while saving the item: ${error.message}` });
  }
});

module.exports = router;
