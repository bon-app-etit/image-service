const {imageModal, getImages, getImageById, postImage, updateImage, partialUpdate, deleteImage, deleteAllImages} = require('../db.js');
module.exports.controller = {
  restaurant: {
    getAllImages: (req, res) => { 
        getImages((err, results) => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send(results);
          }
        })
    },
    getImagesById: (req,res) => {
        const id = req.params.imageId;
        getImageById(id, (err, result) => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send(result)
          }
        })
          
    },
    postImage: (req,res) => {
        const image = new imageModal(req.body);
        postImage(image, err => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send();
          }
        })
    },
    updateImage: (req,res) => {
      const id = req.params.imageId;
      const image = new imageModal(req.body);
        updateImage(id, image, err => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send();
          }
        })
    },
    partialUpdateImage: (req,res) => {
        const id = req.params.imageId;
        const image = newImageModal(req.body);
        partialUpdate(id,image, err => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else{
            res.status(200).send();
          }
        })
    },
    deleteImage: (req,res) => {
        const id = req.params.productId;
        deleteImage(id, err => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send();
          }
        })
    },
    deleteAllImages: (req,res) => {
        deleteAllImages(err => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send();
          }
        })
    }
  },
  users: {
    
  }

}