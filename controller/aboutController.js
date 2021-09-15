const db = require('../model/db.js');
const About = require('../model/about.js');

const aboutController = {
    getAbout: function(req, res){
        res.render('about', {success:"hidden"});
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
            res.render('about', {email: req.session.email});
            }
        });
    },
};

module.exports = aboutController;