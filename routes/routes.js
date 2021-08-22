const express = require('express');
const loginController = require('../controller/loginController.js');
const signupController = require('../controller/homeController.js');
const app = express();

app.get('/favicon.ico', controller.getFavicon);
app.get('/', controller.getIndex);
app.get('/getUsername', loginController.getUsername);
app.get('/login', loginController.getLogin);
app.post('/login', loginController.postLogin);
app.get('/register', loginController.getRegister);
app.post('/register', validation.signupValidation(), loginController.postRegister);
app.get('/logout', loginController.getLogout);
app.get('/home', homeController.getHome);
app.get('/profile', homeController.getProfile);
app.get('/settings', homeController.getSettings);

module.exports = app;