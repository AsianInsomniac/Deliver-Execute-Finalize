const db = require('../model/db.js');
const bcrypt = require('bcrypt');
const express = require('express');
const bp = require('body-parser');
const User = require('../model/user.js');
const { validationResult } = require('express-validator');
const saltRounds = 10;

const signupController = {

    getSignUp: function (req, res) {
        res.render('register',{success:"hidden"});
    },

    postSignUp: function (req, res) {
        var errors = validationResult(req);

		if (!errors.isEmpty()) {
            errors = errors.errors;
            var i;
            var details = {};

            for (i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg
            
            if (req.body.email != "")
                details['email'] = req.body.email;
            if (req.body.mobile != "")
                details['mobile'] = req.body.mobile;
            if (req.body.name != "")
                details['name'] = req.body.name;

            res.render('register', details);
        }
		else{
			var email = req.body.email;
			var mobile = req.body.mobile;
			var name = req.body.name;
			var pass = req.body.password;
            console.log("Registering " + email + "...");
			bcrypt.hash(pass, saltRounds, function(err, hash) {
                var user = {
                    email: email,
                    mobile: mobile,
                    name: name,
                    password: hash
                }

                db.findOne(User, {email:email}, '', function (result) {
                    if (result) {
                        console.log("Email is Taken")
                        var details = {
                            flag: false,
                            error: 'Email taken.'
                          };
                        res.render('register', {errormessage: 'Email Taken'});
                        }
                        else{
                            db.insertOne(User, user, function(flag){
                                if(flag){
                                    console.log('Created account of ' + name);

                                    var query = { email: email };

                                    db.findOne(User, query, null, function (result) {
                                        if (result)
                                            bcrypt.compare(pass, result.password, function (err, equal) {
                                                if (equal) {
                                                    req.session.email = result.email;
                                                    res.render('home', { email: result.email });
                                                }
                                            });
                                    });
                                }
                            });
                        }
                });
			});
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
