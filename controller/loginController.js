const db = require('../model/db.js');

const bcrypt = require('bcryptjs');

const User = require('../model/user.js');

const loginController = {
    getLogin: function (req, res){
        if(req.session.username)
            req.session.destroy(function(err){
                if (err) throw err
            });
            res.render('about.hbs', {error:"hidden"});

    },

    postLogin: function (req, res) {
		
        var u = req.body.username;
        var p = req.body.password;

        var query1 = {username: u};
		db.findOne(User, query1, null, function(x) {
            
			if(x)
				bcrypt.compare(p, x.password, function(err, equal) {
					
					if(equal){
						
						req.session.username = x.user;
						
						console.log(' Successfully Logged In' + x.user);

						res.redirect('/user/');
					}
					else{
						res.render('login');
					}
					
				});
			else
				res.render('login');
        });
    }
}
module.exports = loginController;