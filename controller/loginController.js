const db = require('../model/db.js');

const bcrypt = require('bcryptjs');

// const popup = require('popups');

const User = require('../model/user.js');

// const loginModal = document.getElementById('id01')

const loginController = {
    getLogin: function (req, res){
		console.log("hiii");
        if(req.session.username)
            req.session.destroy(function(err){
                if (err) throw err
            });
        res.render('login', {error:"hidden"});
    },

    postLogin: function (req, res) {
		
		console.log("testtestetstetstets")
        var e = req.body.email;
        var p = req.body.password;
		console.log ("Logging in " + e + " ...");
        var query1 = {email: e};
			db.findOne(User, query1, null, function(x) {
				console.log("went here pa rin");
				if(x)
					bcrypt.compare(p, x.password, function(err, equal) {
						
						if(equal){
							
							req.session.email = x.email;
							req.session.name = x.name;
							
							console.log(' Successfully Logged In ' + x.email);

							res.render('home', {email: x.email, user: x.name});
						}
						else{
							console.log("Password not found!");
							res.render('login' , {error: 'Invalid User or Password'});
						}
						
					});
				else {
					console.log("invalid user or pass");
					res.render('login' , {error: 'Invalid User or Password'});
				}
					
        });
    },

	getLoginScreen: function(req, res) {
		if (req.session.email) 
		{
			res.render('home');
		}
		else
		{
			console.log("Opening Login Screen . . .");
			res.render('login')
		}
	}
}

module.exports = loginController;