const express = require('express');
const router1 = express.Router();
const multer=require('multer')

const ImageModel=require("./image.model")
//storage

const Storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
});

const upload=multer(
    {
        storage:Storage
    }
).single('testImage')
// Define the route to retrieve an item by ID
router1.post('/image',  (req, res) => {
         upload(req,res,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                const newImage=new ImageModel({
                    name:req.body.name,
                    image:{
                        data:req.file.filename,
                        contentType:'image/png'
                    }
                })
                newImage.save()
                .then(()=>console.log('successfully uploaded')).catch(err=>console.log(err))
            }
         })
});

module.exports = router1;

