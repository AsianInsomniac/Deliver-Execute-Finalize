const db = require('../model/db.js');
const About = require('../model/about.js');

const aboutController = {
    getAbout: function(req, res){
        res.render('about');
    },

    postAbout: function(req, res){
        var email = req.body.email;
        var mobile_no = req.body.mobile_no;
        var message = req.body.message;
        var name = req.body.name;

        db.insertOne(About, {
            email: email,
            mobile_no: mobile_no,
            message: message,
            name: name
        });

        console.log('Added About ' + email);
        res.render('about');
    },
};

module.exports = aboutController;