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


app.get('/images', (req, res) => {
 console.log("request receiver") 
	db.find()
  .then(images => {
    res.json({
  images
    })
  })
})


app.listen(port, function () {
    console.log(`listening on port ${port}`);
  });
