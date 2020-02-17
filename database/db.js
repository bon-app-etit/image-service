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
    helpful: [{userName: String}],
    notHelpful: [{userName: String}],
    imageUserID: Number,
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
  helpful: [{restaurantID: Number}],
  notHelpful:[{restaurantID: Number}],
  images: [{
    imageID: Number,
    imageString: String,
    imageDate: Date
  }]
});

module.exports = db;
module.exports = {imageModal, userInfo};