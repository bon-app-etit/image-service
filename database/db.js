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



  


const imagemodal = new Schema({
  restaurauntTitle: String,
  helpfull: Number,
  notHelpfull: Number,
  images: Array

});

//use for reference in seeding script



module.exports = mongoose.model("imagemodal" ,imagemodal);