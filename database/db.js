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
    helpful: [{user: String}],
    notHelpful: [{user: String}],
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
});

module.exports = db;
module.exports = {imageModal, userInfo};