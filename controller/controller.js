const db = require('../model/db.js');

const controller = {
    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {
		  
      console.log("this is the user " + req.session.email)
      res.render('home', {email: req.session.email});
    },
	
	getShop: function (req, res) {
		res.render('shop', {email: req.session.email});
	},
	
	getAbout: function (req, res) {
		res.render('about', {email: req.session.email});
	},
	
	getGallery: function (req, res) {
		res.render('gallery', {email: req.session.email});
	}

}

module.exports = controller;
