const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const morgan = require('morgan');
const imageModal = require('../database/db')
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
	db.find()
  .then(images => {
    res.json({
  images
    })
  })
})

//get only one image by Id
app.get('/images/:imageId', (req,res) => {
  const id = req.params.imageId;
  imageModal.findById(id)
    .then(image => {
      res.status(200).send(`this is the image with id: ${id}`)
    })
    .catch(err => {
      res.status(500).send(`unable to get item with id: ${id} from database`)
    })
})

//post a image
app.post('/images', (req,res) => {
  var myData = new imageModal(req.body);
  myData.save()
    .then(item => {
      res.status(200).send('item saved to database!')
    })
    .catch(err => {
      res.status(500).send('unable to save to database!')
    })
})

//update item by image
// app.put('/images/:productId', (req,res) => {

// })

app.listen(port, function () {
    console.log(`listening on port ${port}`);
  });
