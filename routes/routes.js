const express = require('express');
const controller = require('../controller/controller.js');
const loginController = require('../controller/loginController.js');
const logoutController = require('../controller/logoutController.js');
const signupController = require('../controller/signupController.js');
const aboutController = require('../controller/aboutController');
const cartController = require('../controller/cartController');
const app = express();

// controller
app.get('/favicon.ico', controller.getFavicon);
app.get('/', controller.getIndex);
app.get('/shop', controller.getShop);
app.get('/about', controller.getAbout);
app.get('/gallery', controller.getGallery);

// loginController
app.get('/login/:id', loginController.getLogin);
app.post('/login', loginController.postLogin);

// logoutController
app.post("/logout", logoutController.getLogout);

// signupController
app.get('/register', signupController.getSignUp);
app.post('/register', signupController.postSignUp);

// aboutUsController
app.get('/about', aboutController.getAbout);
app.post('/about', aboutController.postAbout);

// cartController
app.get('/navbar', cartController.getCart);
app.post('/navbar', cartController.postCart);


module.exports = app;