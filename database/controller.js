const {getImages, getImageById, postImage, updateImage, partialUpdateImage, deleteImage, deleteAllImages} = require('../db.js');
const {getUserImages, getUserImageById, postUserImage, updateUserImage, partialUpdateUserImage, deleteUserImage, deleteAllUserImages} = require('../db.js');
const {imageModal, userInfo} = require('./db.js');

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
        const image = new imageModal(req.body);
        partialUpdateImage(id,image, err => {
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
  user: {
    getAllUserImages: (req, res) => { 
        getUserImages((err, results) => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send(results);
          }
        })
    },
    getUserImagesById: (req,res) => {
        const id = req.params.imageId;
        getUserImageById(id, (err, result) => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send(result)
          }
        })
          
    },
    postUserImage: (req,res) => {
        const image = new userInfo(req.body);
        postUserImage(image, err => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send();
          }
        })
    },
    updateUserImage: (req,res) => {
      const id = req.params.imageId;
      const image = new userInfo(req.body);
        updateUserImage(id, image, err => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send();
          }
        })
    },
    partialUpdateUserImage: (req,res) => {
        const id = req.params.imageId;
        const image = new userInfo(req.body);
        partialUpdateUserImage(id,image, err => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else{
            res.status(200).send();
          }
        })
    },
    deleteUserImage: (req,res) => {
        const id = req.params.productId;
        deleteUserImage(id, err => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send();
          }
        })
    },
    deleteAllUserImages: (req,res) => {
        deleteAllUserImages(err => {
          if(err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.status(200).send();
          }
        })
    }
  }

}