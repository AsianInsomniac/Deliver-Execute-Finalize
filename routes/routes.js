const express = require('express');
const controller = require('../controller/controller.js');
const loginController = require('../controller/loginController.js');
const signupController = require('../controller/signupController.js');
const app = express();

// controller
app.get('/favicon.ico', controller.getFavicon);
app.get('/', controller.getIndex);

// loginController
app.get('/login/:id', loginController.getLogin);
app.get('/login', loginController.postLogin);

// signupController
app.get('/signup', signupController.getSignUp);
app.get('/signup', signupController.postSignUp)

// aboutUsController
// app.get('/aboutus', aboutUsController);

module.exports = app;
