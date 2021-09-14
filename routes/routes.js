const express = require('express');
const controller = require('../controller/controller.js');
const loginController = require('../controller/loginController.js');
const logoutController = require('../controller/logoutController.js');
const signupController = require('../controller/signupController.js');
const aboutController = require('../controller/aboutController');
const cartController = require('../controller/cartController');
const productController = require('../controller/productController');
const checkoutController = require('../controller/checkoutController');
const validation = require('../helper/validation.js');
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
app.get('/login', loginController.getLoginScreen);

// logoutController
app.post("/logout", logoutController.getLogout);

// signupController
app.get('/register', signupController.getSignUp);
app.post('/register', validation.signupValidation(), signupController.postSignUp);

// aboutUsController
app.get('/about', aboutController.getAbout);
app.post('/about', aboutController.postAbout);

// productController
app.get('/fbclassic', productController.getClassic);
app.get('/fbred', productController.getRed);
app.get('/fbpink', productController.getPink);
app.get('/fbblue', productController.getBlue);
app.get('/fbyellow', productController.getYellow);
app.post('/fbblue', productController.addToCart);
app.post('/fbclassic', productController.addToCart);
app.post('/fbred', productController.addToCart);
app.post('/fbyellow', productController.addToCart);
app.post('/fbpink', productController.addToCart);

// checkoutController
app.get('/checkout', checkoutController.getCheckout);
app.post('/checkout', checkoutController.postCheckout);

// cartController
app.get('/navbar', cartController.getCart);
app.post('/navbar', cartController.deleteCart);


module.exports = app;