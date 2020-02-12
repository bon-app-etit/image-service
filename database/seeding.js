const mongoose = require('mongoose');
const db = require('./db.js');
const imagemodal = require('../database/db')



//var imageUrl = `https://yelpimagesmodal.s3-us-west-1.amazonaws.com/yelp-images/New+Folder+With+Items+2+copy/yelp-images${index}`

//choices of restaraunt name to choose from
const mockRestarauntNames = ["CheeseCake Factory", "Joe's Pizza", "Ike Creamery", "The Bayfront", "Judroerno", "The Crescent Dinner Club", "Chipotle", "La Madrina Tacos", "21st Amendment", "New India", "The Melt", "Tender Greens"];


//random generator for helpfullness numbers--will return a number between 20 and 0
const helpfullNessRandomGenerator = function() {
    return Math.floor(Math.random() * 20)
}


//returns an array that has 5 url links to amazon images
const imagesArray = function() {
    const url = "https://yelpimagesmodal.s3-us-west-1.amazonaws.com/yelp-images/New+Folder+With+Items+2+copy/yelp-images"
    const limit = 5;
    let r = () => Math.floor(Math.random() * 100)
    let returnArray = [];
    for (var i = 0; i < limit; i++) {
        returnArray.push(url+r())
    }
    return returnArray;
}

const seeder = () => {
for (var x = 0 ; x < 100; x++) {

    var imageModalInstance = new imagemodal({
        restaurauntTitle: mockRestarauntNames[Math.floor(Math.random()* 12)],
      helpfull: helpfullNessRandomGenerator(),
      notHelpfull: helpfullNessRandomGenerator(),
      images: imagesArray()
    })

    imageModalInstance.save((err, data) => {
        if(err) {
            console.log("save error!!:", err)
        } else {
        console.log("Success!", data)
        }
    })



};
}

seeder();


    
