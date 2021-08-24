const controller = {
    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {
		  
      // if (req.session.idNum)
      res.render('index');
    }
}

module.exports = controller;
