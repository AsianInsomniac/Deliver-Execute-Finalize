const express = require('express');
const loginController = require('../controller/loginController.js');
const signupController = require('../controller/signupController.js');
const app = express();

app.get('/favicon.ico', controller.getFavicon);
//app.get('/', loginController.getIndex); //redirect '/' to index file, should be in one of the controllers

module.exports = app;