const db = require('../model/db.js');
const About = require('../model/about.js');
const User = require('../model/user.js');

const aboutController = {
    getAbout: function(req, res){
		var userData = {};
		var e = "";
		
		if(req.session.email)
			e = req.session.email;

		var query = {
			email: e
		};
			
		
		db.findOne(User, query, null, function(x) {
			if(x) {
				userData["email"] = x.email;
				userData["user"] = x.name;
				userData["mobile"] = x.mobile;
			}
			
			res.render('about', userData);
		});
    },

    postAbout: function(req, res){
        var email = req.body.email;
        var mobile_no = req.body.mobile_no;
        var message = req.body.message;
        var name = req.body.name;
        console.log("i was here");

        var about = {
            email: email,
            mobile_no: mobile_no,
            message: message,
            name: name
        }
        
        console.log("this is the contents: " + about.email);

        db.insertOne(About, about, function(flag) {
            if(flag){
				console.log('Created contact us for ' + name);
				res.render('about', {email: req.session.email, user: req.session.name });
            }
        });
    },
};

module.exports = aboutController;