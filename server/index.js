const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const morgan = require('morgan');
const db = require('../database/db.js')
const cors = require('cors');
const port = 3004;
const controller = require('../database/controller.js');
let app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(cors());

//get all imageModal data (user and image data) for a restaurant based on restaurant ID.
app.get('/restaurants/:restaurantID/images', controller.getAllImages);    

//restaurant gets data 
//get imageModal data (user and image data) for a restaurant based on image modal id for a restaurant based on restaurant ID.
app.get('/restaurants/:restaurantID/images/:imageId', controller.getImagesById);

//specific user posts a image by imageID.
app.post('/restaurants/:restaurantID/users/:userID/images', controller.postImage);

//specific user updates a image by imageID.
app.put('/restaurants/:restaurantID/users/:userID/images/:imageId', controller.updateImage)

//specific user partially updates a image or description by imageID.
app.patch('/restaurants/:restaurantID/images/:imageId', controller.partialUpdateImage)

//delete an item by imageId
app.delete('/restaurants/:restaurantID/images/:imageId', controller.deleteImage)

//delete all images
app.delete('/restaurants/:restaurantID/images', controller.deleteAllImages)

app.listen(port, function () {
    console.log(`listening on port ${port}`);
  });
