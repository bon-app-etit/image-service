# image-service

## API Documentation

* **URL**: _/restaurants/:restaurantID/images
  * **Notes:** Gets all imageModal data for a restaurant
  * **Method:** _`GET`_
  * **Example:** `GET restaurants/12/images`
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
    userID: [INT NOT NULL]
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NUL]L,
    elite20: [INT],
  },
]
```
* **URL**: _/restaurants/:restaurantID/images/:imageID
  * **Notes:** Gets data for one imageModal for a restaurant
  * **Method:** _`GET`_
  * **Example:** `GET restaurants/12/images/3`
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
    userID: [INT NOT NULL]
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NUL]L,
    elite20: [INT],
  },
```

* **URL**: _/restaurants/:restaurantID/images/:imageID
  * **Notes:** Gets one imageModal data for a restaurant
  * **Method:** _`POST`_
  * **Example:** `GET restaurants/12/images/3`
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
    userID: [INT NOT NULL]
    userImage: [STRING NOT NULL],
    friends: [INT NOT NULL],
    stars: [INT NOT NUL]L,
    elite20: [INT],
  },
```