CREATE DATABASE image_modal;

USE image_modal;

CREATE TABLE restaurants (
    id SERIAL,
    ownerID INT,
    PRIMARY KEY(id),
    FOREIGN KEY ownerID REFERENCES users(id)
)

CREATE TABLE images (
    id SERIAL,
    imageString VARCHAR(30),
    imageDate DATE NOT NULL,
    helpful INT,
    notHelpful INT,
    restaurantId INT,
    userID INT,
    PRIMARY KEY (id),
    FOREIGN KEY(restaurantID) REFERENCES restaurants(id)
    FOREIGN KEY(userID) REFERENCES images(id)
)

CREATE TABLE users (
    id SERIAL,
    userImage VARCHAR(30),
    friends INT NOT NULL,
    stars INT NOT NULL,
    eliteYear INT,
    PRIMARY KEY (id)
)


