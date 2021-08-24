const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
//const db = require('./model/db.js'); // db const
const hbs = require('hbs');
//const session = require('express-session'); //session const
//const MongoStore = require('connect-mongo'); //MongoDB const
const routes = require('./routes/routes.js');
const path = require('path');
const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

dotenv.config();
port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//db.connect();

app.use('/', routes);

app.listen(port, function(){
	console.log('Server running at port ' + port);
});