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
const url = 'mongodb://CCAPDEV_group10:easypeasy@team1-shard-00-00.oigyx.mongodb.net:27017,team1-shard-00-01.oigyx.mongodb.net:27017,team1-shard-00-02.oigyx.mongodb.net:27017/Terra?ssl=true&replicaSet=atlas-z8le67-shard-0&authSource=admin&retryWrites=true&w=majority'

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

dotenv.config();
const port = process.env.PORT;

// app.configure(function(){
// 	app.use(express.bodyParser());
//   });

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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