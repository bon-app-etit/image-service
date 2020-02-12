const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const options = {
 useNewUrlParser: true
}
mongoose.connect('mongodb://localhost/yelpImages', options);
var db = mongoose.connection;
//connect to the database and confirm
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected to the DB: ")
  });

const imageModal = new Schema({
  restaurauntTitle: String,
  helpfull: Number,
  notHelpfull: Number,
  images: Array
});

const getImages = () => {
  imageModal.find()
    .then(console.log('found images'))
    .catch(console.log('cant find images'))
}

const getImageById = (id) => {
  imageModal.findById(id)
    .then(console.log(`found image by ${id}`))
    .catch(console.log(`couldn't find image by ${id}`))
}

const postImage = (image) => {
  image.save()
    .then(console.log('image saved to database'));
    .catch(console.log('image not saved by database'));
}



module.exports = {imageModal, getImages, getImageById, postImage}