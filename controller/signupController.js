const bcrypt = require('bcryptjs');
const User = require('../model/user.js');
const {validationResult} = require('express-validator');
const saltRounds = 10;

const signupController = {

    getSignUp: function (req, res) {
        res.render('register',{success:"hidden"});
    },

    postSignUp: function (req, res) {

		var errors = validationResult(req);

		if (!errors.isEmpty()) {

            errors = errors.errors;

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

			bcrypt.hash(pass, saltRounds, function(err, hash) {

				db.insertOne(User, {
					email: email,
					mobile: mobile,
					name: name,
					password: hash
				}, function(flag){});

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
