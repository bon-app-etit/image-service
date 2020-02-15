const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const morgan = require('morgan');
const db = require('../database/db.js');
const cors = require('cors');
const port = 3004;
const controller = require('../database/controller.js');
let app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(cors());

//RESTAURANTS API ROUTES
//get all image data (user info and image data) for a restaurant based on restaurant ID.
app.get('/restaurants/:restaurantID/images', controller.restaurants.getAllImages);    

//get image data (user info and image data) for a restaurant based on image modal id for a restaurant based on restaurant ID.
app.get('/restaurants/:restaurantID/images/:imageID', controller.restaurants.getImagesById);

//post a image for a specific restaurant
app.post('/restaurants/:restaurantID/images', controller.restaurants.postImage);

//update a image for a specific restaurant
app.put('/restaurants/:restaurantID/images/:imageID', controller.restaurants.updateImage)

//partially update a image for a specific restaurant .
app.patch('/restaurants/:restaurantID/images/:imageID', controller.restaurants.partialUpdateImage)

//delete an item by imageId
app.delete('/restaurants/:restaurantID/images/:imageID', controller.restaurants.deleteImage)

//delete all images
app.delete('/restaurants/:restaurantID/images', controller.restaurants.deleteAllImages)

//USERS API ROUTES
//get all image data (user info and image data) for a user
app.get('/users/:userID/images', controller.users.getAllUserImages);

//get image data (user info and image data) for a user based on image modal id for a restaurant based on restaurant ID.
app.get('/users/:userID/images/:imageID', controller.users.getUserImagesById);

//post a image for a user
app.post('/users/:userID/images', controller.users.postUserImage);

//update a image for a user
app.put('/users/:userID/images/:imageID', controller.users.updateUserImage)

//partially update a image for a user
app.patch('/users/:userID/images/:imageID', controller.users.partialUpdateUserImage)

//delete an item of a user
app.delete('/users/:userID/images/:imageID', controller.users.deleteUserImage)

//delete all images for a user
app.delete('/users/:userID/images', controller.users.deleteAllUserImages)


app.listen(port, function () {
    console.log(`listening on port ${port}`);
  });
