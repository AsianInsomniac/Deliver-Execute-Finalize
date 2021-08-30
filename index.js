const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const db = require('./model/db.js');
const hbs = require('hbs');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const routes = require('./routes/routes.js');
const path = require('path');
const app = express();
const url = 'mongodb+srv://CCAPDEV_group10:easypeasy@team1.oigyx.mongodb.net/Terra?retryWrites=true&w=majority'

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

db.connect();

app.use(session({
	secret: 'ArtHoc',
	resave: false,
	saveUninitialized: false,
	store: MongoStore.create({ mongoUrl: url })
}));

app.use('/', routes);

app.listen(port, function(){
	console.log('Server running at port ' + port);
});