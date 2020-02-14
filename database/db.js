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
  restaurantID: Number,
  images: [{
    imageID: Number,
    imageString: String,
    imageDate: Date,
    helpful: Number,
    notHelpful: Number,
    userID: Number,
    userImage: String,
    friends: Number,
    stars: Number,
    eliteNumber: Number,
  }],
});

const getImages = () => {
  imageModal.find()
    .then(console.log('found images'))
    .catch(console.log('cant find images'))
}

const getImageById = (id) => {
  imageModal.findById(id)
    .then(data => 
      {
        console.log(data);
        return data;
      }
    .catch(err => {
      console.log(err);
    })
}

const postImage = (image) => {
  image.save()
    .then(console.log('image saved to database'))
    .catch(console.log('image not saved by database'))
}

const updateImage = (id,image) => {
  imageModal.update({_id: id},{image}, {upsert:true})
    .then(console.log(`update image at id: ${id}`))
    .catch(console.log(`failed to update image at id ${id}`))
}

const partialUpdate = (id,image) => {
  imageModal.update({_id: id},{$set: image}, {upsert: true})
    .then(console.log(`partial update at id: ${id}`))
    .catch(console.log(`failed to update image at id ${id}`))
}

const deleteImage = (id) => {
  imageModal.findAndModify(_id: id)
    .then(console.log(`delete image at id: ${id}`))
    .catch(console.log(`failed to delete item with id ${id}`))
}

const deleteAllImages = () => {
  imageModal.remove()
    .then(console.log('deleted all images'))
    .catch(console.log('failed to delete all images'))
}

module.exports = {imageModal, getImages, getImageById, postImage, updateImage, partialUpdate, deleteImage, deleteAllImages}