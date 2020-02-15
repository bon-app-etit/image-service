# image-service

## API Documentation

### Restaurant Routes:

* **URL**: /restaurants/:restaurantID/images
  * **Notes:** Gets data for all images in a specific restaurant
  * **Method:** _`GET`_
  * **Example:** `GET restaurants/12/images`   
  Gets all data from images in a restaurant with ID 12
  * **URL Params:** `restaurantID = [integer]`
  * **Returns:**
```javascript
images = [
  {
    id: [INT NOT NULL],
    imageString: [STRING NOT NULL],
    imageDate: [DATE NOT NULL],
    rating: [INT NOT NULL],
    helpful: [INT NOT NULL],
    notHelpful: [INT NOT NULL],
    userID: [INT NOT NULL],
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NULL],
    eliteYear: [INT]
  }
]
```
* **URL**: /restaurants/:restaurantID/images/:imageID
  * **Notes:** Gets data for a specific image in a specific restaurant
  * **Method:** _`GET`_
  * **Example:** `GET restaurants/12/images/3`   
  Gets a image with ID 3 from a restaurant with ID 12
  * **URL Params:** `restaurantID = [integer], imageID = [integer]`
  * **Returns:**
```javascript
image =
  {
    id: [INT NOT NULL],
    imageString: [STRING NOT NULL],
    imageDate: [DATE NOT NULL],
    rating: [INT NOT NULL],
    helpful: [INT NOT NULL],
    notHelpful: [INT NOT NULL],
    userID: [INT NOT NULL],
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NUL]L,
    eliteYear: [INT]
  }
```

* **URL**: /restaurants/:restaurantID/images
  * **Notes:** Post image to a specific restaurant
  * **Method:** _`POST`_
  * **Example:** `POST restaurants/12/images`  
  Posts a image to a restaurant with ID 12
  * **URL Params:** `restaurantID = [integer]`
  * **Request Body:**
```javascript
image =
  {
    id: [INT NOT NULL],
    imageString: [STRING NOT NULL],
    imageDate: [DATE NOT NULL],
    rating: [INT NOT NULL],
    helpful: [INT NOT NULL],
    notHelpful: [INT NOT NULL],
    userID: [INT NOT NULL],
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NUL]L,
    eliteYear: [INT]
  }
```

* **URL**: /restaurants/:restaurantID/images/:imageID
  * **Notes:** Update a image in a specific restaurant
  * **Method:** _`PUT`_
  * **Example:** `PUT restaurants/12/images/4`   
  Updates a image with ID 4 in a restaurant with ID 12
  * **URL Params:** `restaurantID = [integer] imageID = [integer]`
  * **Request Body:**
```javascript
image =
  {
    id: [INT NOT NULL],
    imageString: [STRING NOT NULL],
    imageDate: [DATE NOT NULL],
    rating: [INT NOT NULL],
    helpful: [INT NOT NULL],
    notHelpful: [INT NOT NULL],
    userID: [INT NOT NULL],
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NUL]L,
    eliteYear: [INT]
  }
```

* **URL**: /restaurants/:restaurantID/images/:imageID
  * **Notes:** Partially update a image in a specific restaurant
  * **Method:** _`PATCH`_
  * **Example:** `PATCH restaurants/12/images/4`  Partially updates a image with ID 4 in a restaurant with ID 12
  * **URL Params:** `restaurantID = [integer] imageID = [integer]`
  * **Request Body:**
```javascript
image =
  {
    id: [INT NOT NULL],
    imageString: [STRING NOT NULL],
    imageDate: [DATE NOT NULL],
    rating: [INT NOT NULL],
    helpful: [INT NOT NULL],
    notHelpful: [INT NOT NULL],
    userID: [INT NOT NULL],
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NUL]L,
    eliteYear: [INT]
  }
```
  Include any of the properties in the request body to partially update

* **URL**: /restaurants/:restaurantID/images/:imageID
  * **Notes:** Update a image in a specific restaurant
  * **Method:** _`DELETE`_
  * **Example:** `DELETE restaurants/12/images/4`  
  Deletes a image with ID 4 in a restaurant with ID 12
  * **URL Params:** `restaurantID = [integer]`
  * **Request Body:**
  None

* **URL**: /restaurants/:restaurantID/images
  * **Notes:** Deletes all images in a specific restaurant
  * **Method:** _`DELETE`_
  * **Example:** `DELETE restaurants/12/images`  
  Deletes all images in a restaurant with a ID 12
  * **URL Params:** `restaurantID = [integer] imageID = [integer]`
  * **Request Body:**
  None

### User Routes:

* **URL**: /users/userID/images
  * **Notes:** Gets data for all images for a specific user
  * **Method:** _`GET`_
  * **Example:** `GET users/12/images`   
  Gets all data from images for a user with ID 12
  * **URL Params:** `userID = [integer]`
  * **Returns:**
```javascript
images = [
  {
    id: [INT NOT NULL],
    imageString: [STRING NOT NULL],
    imageDate: [DATE NOT NULL],
    rating: [INT NOT NULL],
    helpful: [BOOLEAN],
    notHelpful: [BOOLEAN],
    userID: [INT NOT NULL],
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NULL],
    eliteYear: [INT]
  }
]
```
* **URL**: /users/userID/images/:imageID
  * **Notes:** Gets data for a specific image in a specific user
  * **Method:** _`GET`_
  * **Example:** `GET users/12/images/3`   
  Gets a image with ID 3 from a user with ID 12
  * **URL Params:** `userID = [integer], imageID = [integer]`
  * **Returns:**
```javascript
image =
  {
    id: [INT NOT NULL],
    imageString: [STRING NOT NULL],
    imageDate: [DATE NOT NULL],
    rating: [INT NOT NULL],
    helpful: [BOOLEAN],
    notHelpful: [BOOLEAN],
    userID: [INT NOT NULL],
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NUL]L,
    eliteYear: [INT]
  }
```

* **URL**: /users/userID/images
  * **Notes:** Post image for a specific user
  * **Method:** _`POST`_
  * **Example:** `POST users/12/images`  
  Posts a image for a user with ID 12
  * **URL Params:** `userID = [integer]`
  * **Request Body:**
```javascript
image =
  {
    id: [INT NOT NULL],
    imageString: [STRING NOT NULL],
    imageDate: [DATE NOT NULL],
    rating: [INT NOT NULL],
    helpful: [BOOLEAN],
    notHelpful: [BOOLEAN],
    userID: [INT NOT NULL],
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NUL]L,
    eliteYear: [INT]
  }
```

* **URL**: /users/userID/images/:imageID
  * **Notes:** Update a image for a specific user
  * **Method:** _`PUT`_
  * **Example:** `PUT users/12/images/4`   
  Updates a image with ID 4 for a user with ID 12
  * **URL Params:** `userID = [integer] imageID = [integer]`
  * **Request Body:**
```javascript
image =
  {
    id: [INT NOT NULL],
    imageString: [STRING NOT NULL],
    imageDate: [DATE NOT NULL],
    rating: [INT NOT NULL],
    helpful: [BOOLEAN],
    notHelpful: [BOOLEAN],
    userID: [INT NOT NULL],
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NULL],
    eliteYear: [INT]
  }
```

* **URL**: /users/userID/images/:imageID
  * **Notes:** Partially update a image for a specific user
  * **Method:** _`PATCH`_
  * **Example:** `PATCH users/12/images/4`  Partially updates a image with ID 4 for a user with ID 12
  * **URL Params:** `userID = [integer] imageID = [integer]`
  * **Request Body:**
```javascript
image =
  {
    id: [INT NOT NULL],
    imageString: [STRING NOT NULL],
    imageDate: [DATE NOT NULL],
    rating: [INT NOT NULL],
    helpful: [BOOLEAN],
    notHelpful: [BOOLEAN],
    userID: [INT NOT NULL],
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NULL],
    eliteYear: [INT]
  }
```
  Include any of the properties in the request body to partially update

* **URL**: /users/userID/images/:imageID
  * **Notes:** Update a image for a specific user
  * **Method:** _`DELETE`_
  * **Example:** `DELETE users/12/images/4`  
  Deletes a image with ID 4 for a user with ID 12
  * **URL Params:** `userID = [integer]`
  * **Request Body:**
  None

* **URL**: /users/userID/images
  * **Notes:** Deletes all images for a specific user
  * **Method:** _`DELETE`_
  * **Example:** `DELETE users/12/images`  
  Deletes all images for a user with a ID 12
  * **URL Params:** `userID = [integer] imageID = [integer]`
  * **Request Body:**
  None