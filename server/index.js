const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const morgan = require('morgan');
const {imageModal, getImages, getImageById, postImage, updateImage, partialUpdate, deleteImage, deleteAllImages} = require('../database/db')
const db = require('../database/db.js')
const cors = require('cors');
const port = 3004;
const controller = require('../database/controller.js');
let app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(cors());

//get all images
app.get('/images', controller.getAllImages);    

//get only one image by Id
app.get('/images/:imageId', controller.getImagesById);

//post a image
app.post('/images', controller.postImage);

//update item by imageId
app.put('/images/:imageId', controller.updateImage)

//partial update with patch request
app.patch('/images/:imageId', controller.partialUpdateImage)

//delete an item by imageId
app.delete('/images/:imageId', controller.deleteImage)

//delete all images
app.delete('/images', controller.deleteAllImages)

app.listen(port, function () {
    console.log(`listening on port ${port}`);
  });
