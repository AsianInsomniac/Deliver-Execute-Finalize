const db = require('../model/db.js');
const bcrypt = require('bcrypt');

const User = require('../model/user.js');

const {validationResult} = require('express-validator');
const saltRounds = 10;

const signupController = {

    getSignUp: function (req, res) {
        
        res.render('register',{success:"hidden"});
    },

    postSignUp: function (req, res) {
        console.log("1231313");
		var errors = validationResult(req);

		if (!errors.isEmpty()) {
            console.log("Error in Registering...");
            errors = errors.errors;

            var i;

            var details = {};
            for(i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            res.render('register', details);
        }
		else{

			var email = req.body.email;
			var mobile = req.body.mobile;
			var name = req.body.name;
			var pass = req.body.pass + "";
            console.log("Registering " + email + "...");
			bcrypt.hash(pass, saltRounds, function(err, hash) {
                
                var user = {
                    email: email,
                    mobile: mobile,
                    name: name,
                    password: hash
                }
                
				db.insertOne(User, user, function(flag){

                });

			});

			console.log('Created account of ' + name);
			res.render('register');
		}
    },

    checkName: function (req, res) {
        var name = req.query.name;

        db.findOne(User, {name:name}, {name:1}, function (result) {
            res.send(result);
        });
    },

	checkMobile: function (req, res) {
        var mobile = req.query.mobile;
        db.findOne(User, {mobile: mobile}, "mobile", function (result) {
            res.send(result);
        });
    }

}

module.exports = signupController;
