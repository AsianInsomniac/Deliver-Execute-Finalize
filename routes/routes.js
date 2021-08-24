const express = require('express');
const controller = require('../controller/controller.js');
const loginController = require('../controller/loginController.js');
const signupController = require('../controller/signupController.js');
const app = express();

app.get('/favicon.ico', controller.getFavicon);
app.get('/', controller.getIndex);

module.exports = app;