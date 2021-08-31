const db = require('../model/db.js');

const bcrypt = require('bcryptjs');

const User = require('../model/user.js');

const logoutController = {

    
    getLogout: function (req, res)
    {
        console.log("test1234");

        if(req.session.username)
            req.session.destroy(function(err){
                if (err) throw err
                console.log("Logout Successful!");
				res.render("Logout Successful!");
            });

        else
        {
            console.log("Error! Account isnt Logged in.");
            res.render("Account isnt logged in.");
        }

    }
}

module.exports = loginController;
