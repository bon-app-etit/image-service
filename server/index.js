const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const morgan = require('morgan');
const {imageModal, getImages, getImageById, postImage, updateImage, partialUpdate, deleteImage, deleteAllImages} = require('../database/db')
const db = require('../database/db.js')
const cors = require('cors');
const port = 3004;
let app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(cors());

//get all images
app.get('/images', (req, res) => { 
	getImages()
  .then(images => {
    res.status(200).json({images})
  })
  .catch(err => {
    res.status(200).send('unable to get all images');
  })
})

//get only one image by Id
app.get('/images/:imageId', (req,res) => {
  const id = req.params.imageId;
  getImageById(id)
    .then(image => {
      res.status(200).send(image);
    })
    .catch(err => {
      res.status(500).send(`unable to get item with id: ${id} from database`)
    })
})

//post a image
app.post('/images', (req,res) => {
  const image = new imageModal(req.body);
  postImage(image)
    .then(data => {
      res.status(200).send('item saved to database!')
    })
    .catch(err => {
      res.status(500).send('unable to save to database!')
    })
})

//update item by imageId
app.put('/images/:imageId', (req,res) => {
  //id to find entry to update
  const id = req.params.imageId;
  //request body to update the information, and replace if there is a new one needed
  const image = new imageModal(req.body);
  updateImage(id,image)
    .then(data => {res.status(200).send(`item with id: ${id} updated in database`)})
    .catch(err => {res.status(500).send(`item with id: ${id} NOT updated in database`)})
})

//partial update with patch request
app.patch('/images/:imageId', (req,res) => {
  const id = req.params.imageId;
  const image = newImageModal(req.body);
  partialUpdate(id,image)
    .then(data => {res.status(200).send(`item with id: ${id}`)})
    .catch(err => {res.status(500).send(`item with id ${id}`)})
})

//delete an item by imageId
app.delete('/images/:imageId', (req,res) => {
  const id = req.params.productId;
  deleteImage(_id: id)
  .then(data => {
    res.status(200).status.send('item deleted from database');
  })
  .catch(err => {
    res.status(500).send('unable to delete item from database')
  })
})

//delete all images
app.delete('/images', (req,res) => {
  deleteAllImages()
    .then(data => {
      res.status(200).send('deleted all images in collection');
    })
    .catch(err => {
      res.status(500).send('unable to delete all images from the collection');
    })
})

app.listen(port, function () {
    console.log(`listening on port ${port}`);
  });
