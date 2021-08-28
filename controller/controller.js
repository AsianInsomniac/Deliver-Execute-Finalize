const controller = {
    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {
		  
      // if (req.session.idNum)
      res.render('home');
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
