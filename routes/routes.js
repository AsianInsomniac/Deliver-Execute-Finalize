const express = require('express');
const controller = require('../controller/controller.js');
const loginController = require('../controller/loginController.js');
const signupController = require('../controller/signupController.js');
const aboutController = require('../controller/aboutController');
const app = express();

// controller
app.get('/favicon.ico', controller.getFavicon);
app.get('/', controller.getIndex);
app.get('/shop', controller.getShop);
app.get('/about', controller.getAbout);
app.get('/gallery', controller.getGallery);

// loginController
app.get('/index/:id', loginController.getLogin);
app.post('/index', loginController.postLogin);

// signupController
app.get('/register', signupController.getSignUp);
app.post('/register', signupController.postSignUp);

// aboutUsController
app.get('/about', aboutController.getAbout);
app.get('/about', aboutController.postAbout);

module.exports = app;