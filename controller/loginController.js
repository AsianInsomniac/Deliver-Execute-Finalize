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
							
							console.log(' Successfully Logged In ' + x.email);

							res.render('home', {email: x.email});
						}
						else{
							console.log("Password not found!");
							alert('Username or Password is not found!');
						}
						
					});
				else {
					console.log("invalid user or pass");
					res.render('home' ,{openloginmodal: true});
				}
					
        });
    }
}

module.exports = loginController;