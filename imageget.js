const express = require('express');
const router2 = express.Router();
const ImageModel = require('./image.model');
const path = require('path');
const fs = require('fs');

// Define the route to retrieve an image by name
router2.post('/imageget', async (req, res) => {
    const imageName = req.body.name;  // Assuming "textimage" as an example

    try {
        // Find the image by name
        const image = await ImageModel.findOne({ name: imageName });

        if (!image) {
            return res.status(404).send('Image not found');
        }

        // Construct the absolute path to the image file
        const imagePath = path.join(__dirname, 'uploads', image.image.data.toString());

        // Read the image file and send it as a response
        // Read the image file and send it as a response
fs.readFile(imagePath, (err, data) => {
    if (err) {
        return res.status(500).send('Error reading image file');
    }

    const contentType = image.image.contentType || 'image/png'; // Use the contentType from image data, or default to 'image/png'
    res.contentType(contentType);
    res.send(data);
});

    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router2;
