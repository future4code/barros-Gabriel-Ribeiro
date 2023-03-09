-- Active: 1676570833315@@35.226.146.116@3306@jbl-4416227-gabriel-ribeiro

CREATE TABLE Cookenu_Users (
    id VARCHAR(255) primary key,
    name VARCHAR(255) unique,
    email VARCHAR(255),
    password VARCHAR(255)
);

DELETE FROM Cookenu_Users;

DROP TABLE Cookenu_Users;

CREATE TABLE Cookenu_Recipes (
    id VARCHAR(255) primary key,
    name VARCHAR(255) unique,
    description VARCHAR(255),
    preparation VARCHAR(255),
    creationDate VARCHAR(255)
);

CREATE TABLE Cookenu_Users_Followers (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    following_id VARCHAR(255)
);