const express = require('express')
const multer = require('multer')
const router = express.Router();
const imageSchema =require('../models/imageSchema')
 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })



router.post('/', upload.single('avatar') , (req,res) => 
{
    let path =req.protocol+'://'+ req.hostname+':'+7000+'/uploads/'+req.file.filename; 
    
let newImage = new imageSchema({ imageName : path })
console.log(newImage);
 newImage.save()
 .then((img) => res.status(201).send(img))
 .catch((err) =>
    {
        console.error(err.message);
        res.status(500).send("server error");
    })
 });
module.exports = router; 
