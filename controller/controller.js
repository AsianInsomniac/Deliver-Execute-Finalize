const db = require('../model/db.js');

const controller = {
    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {
		  
      console.log("this is the user " + req.session.email)
      res.render('home', {email: req.session.email, user: req.session.name});
    },
	
	getShop: function (req, res) {
		res.render('shop', {email: req.session.email, user: req.session.name});
	},
	
	getAbout: function (req, res) {
		res.render('about', {email: req.session.email, user: req.session.name});
	},
	
	getGallery: function (req, res) {
		res.render('gallery', {email: req.session.email, user: req.session.name});
	},

	getCart: function (req, res) {
		res.render('cart', {email: req.session.email, user: req.session.name})
	}
}

module.exports = controller;
