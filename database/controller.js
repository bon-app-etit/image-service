module.exports.controller = {
    getAllImages: (req, res) => { 
        getImages()
      .then(images => {
        res.status(200).json({images})
      })
      .catch(err => {
        res.status(200).send('unable to get all images');
      })
    },
    getImagesById: (req,res) => {
        const id = req.params.imageId;
        getImageById(id)
          .then(image => {
            res.status(200).send(image);
          })
          .catch(err => {
            res.status(500).send(`unable to get item with id: ${id} from database`)
          })
    },
    postImage: (req,res) => {
        const image = new imageModal(req.body);
        postImage(image)
          .then(data => {
            res.status(200).send('item saved to database!')
          })
          .catch(err => {
            res.status(500).send('unable to save to database!')
          })
    },
    updateImage: (req,res) => {
        //id to find entry to update
        const id = req.params.imageId;
        //request body to update the information, and replace if there is a new one needed
        const image = new imageModal(req.body);
        updateImage(id,image)
          .then(data => {res.status(200).send(`item with id: ${id} updated in database`)})
          .catch(err => {res.status(500).send(`item with id: ${id} NOT updated in database`)})
    },
    partialUpdateImage: (req,res) => {
        const id = req.params.imageId;
        const image = newImageModal(req.body);
        partialUpdate(id,image)
          .then(data => {res.status(200).send(`item with id: ${id}`)})
          .catch(err => {res.status(500).send(`item with id ${id}`)})
    },
    deleteImage: (req,res) => {
        const id = req.params.productId;
        deleteImage(id)
        .then(data => {
          res.status(200).status.send('item deleted from database');
        })
        .catch(err => {
          res.status(500).send('unable to delete item from database')
        })
    },
    deleteAllImages: (req,res) => {
        deleteAllImages()
          .then(data => {
            res.status(200).send('deleted all images in collection');
          })
          .catch(err => {
            res.status(500).send('unable to delete all images from the collection');
          })
    }

}