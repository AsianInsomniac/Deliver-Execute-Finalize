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
		res.render('shop');
	},
	
	getAbout: function (req, res) {
		res.render('about');
	},
	
	getGallery: function (req, res) {
		res.render('gallery');
	}

}

module.exports = controller;
