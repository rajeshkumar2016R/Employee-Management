const express = require('express');
const userController = require('../controller/userController');

const route = express.Router();

route
    .get("/get", userController.getUsers)
    .get("/getone/:id", userController.getUser)
    .post("/create", userController.createUser)
    .put("/update/:id", userController.updateUser)
    .delete("/delete/:id", userController.deleteUser)

exports.Router = route;