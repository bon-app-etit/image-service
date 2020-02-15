const db = require('./db.js');
//mongo db functions:
//functions for restaurants
const getImages = (callback) => {
    db.find()
      .then((data => {
        callback(null,data);
      }))
      .catch(console.log('cant find images'))
  };
  
  const getImageById = (id, callback) => {
    db.findById(id)
      .then(data => 
        {
          console.log(data);
          callback(null, data)
        })
      .catch(err => {
        console.log(err);
      })
  };
  
  const postImage = (image, callback) => {
    image.save()
      .then( () => callback(null))
      .catch( err => console.log(err))
  };
  
  const updateImage = (id, image, callback) => {
    image.update({_id: id},{image}, {upsert:true})
      .then( () => callback(null))
      .catch(err => console.log(err))
  };
  
  const partialUpdateImage = (id,image, callback) => {
    image.update({_id: id},{$set: image}, {upsert: true})
      .then( () => callback(null))
      .catch(err => console.log(err))  
  };
  
  const deleteImage = (id, callback) => {
    db.findAndModify({_id: id})
      .then( () => callback(null) )
      .catch(err => console.log(err))
  };
  
  const deleteAllImages = (callback) => {
    db.remove()
      .then( () => callback(null) )
      .catch(err => console.log(err))
  };
  
  
  //functions for users
  const getUserImages = (callback) => {
    db.find()
      .then((data => {
        callback(null,data);
      }))
      .catch(console.log('cant find images'))
  };
  
  const getUserImageById = (id, callback) => {
    db.findById(id)
      .then(data => 
        {
          console.log(data);
          callback(null, data)
        })
      .catch(err => {
        console.log(err);
      })
  };
  
  const postUserImage = (image, callback) => {
    image.save()
      .then( () => callback(null))
      .catch( err => console.log(err))
  };
  
  const updateUserImage = (id, image, callback) => {
    image.update({_id: id},{image}, {upsert:true})
      .then( () => callback(null))
      .catch(err => console.log(err))
  };
  
  const partialUpdateUserImage = (id,image, callback) => {
    image.update({_id: id},{$set: image}, {upsert: true})
      .then( () => callback(null))
      .catch(err => console.log(err))  
  };
  
  const deleteUserImage = (id, callback) => {
    db.findAndModify({_id: id})
      .then( () => callback(null) )
      .catch(err => console.log(err))
  };
  
  const deleteAllUserImages = (callback) => {
    db.remove()
      .then( () => callback(null) )
      .catch(err => console.log(err))
  };
  
  module.exports = {getImages, getImageById, postImage, updateImage, partialUpdateImage, deleteImage, deleteAllImages};
  module.exports = {getUserImages, getUserImageById, postUserImage, updateUserImage, partialUpdateUserImage, deleteUserImage, deleteAllUserImages};