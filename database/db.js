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
  ownerID: Number,
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
    eliteYear: Number,
  }],
});

const userInfo = new Schema({
  userID: Number,
  userImage: String,
  friends: Number,
  stars: Number,
  eliteYear: Number,
  images: [{
    imageID: Number,
    imageString: String,
    imageDate: Date,
    helpful: Boolean,
    notHelpful: Boolean
  }]
})

const getImages = (callback) => {
  imageModal.find()
    .then((data => {
      callback(null,data);
    }))
    .catch(console.log('cant find images'))
}

const getImageById = (id, callback) => {
  imageModal.findById(id)
    .then(data => 
      {
        console.log(data);
        callback(null, data)
      })
    .catch(err => {
      console.log(err);
    })
}

const postImage = (image, callback) => {
  image.save()
    .then( () => callback(null))
    .catch( err => console.log(err))
}

const updateImage = (id, image, callback) => {
  image.update({_id: id},{image}, {upsert:true})
    .then( () => callback(null))
    .catch(err => console.log(err))
}

const partialUpdate = (id,image, callback) => {
  image.update({_id: id},{$set: image}, {upsert: true})
    .then( () => callback(null))
    .catch(err => console.log(err))  
}

const deleteImage = (id, callback) => {
  imageModal.findAndModify({_id: id})
    .then( () => callback(null) )
    .catch(err => console.log(err))
}

const deleteAllImages = (callback) => {
  imageModal.remove()
    .then( () => callback(null) )
    .catch(err => console.log(err))
}

module.exports = {imageModal, getImages, getImageById, postImage, updateImage, partialUpdate, deleteImage, deleteAllImages}