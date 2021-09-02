const db = require('../model/db.js');

const bcrypt = require('bcryptjs');

const User = require('../model/user.js');

const logoutController = {

    
    getLogout: function (req, res)
    {
        console.log("test1234");

        if(req.session.email)
            req.session.destroy(function(err){
                if (err) throw err
                console.log("test1234");
                console.log("Logout Successful!");
				res.render("login");
            });

        else
        {
            console.log(req.session.email + " logged out");
            console.log("Error! Account isnt Logged in.");
            console.log("test5678");
            res.render('home');
            console.log("test1234");
        }

    }
}

module.exports = logoutController;