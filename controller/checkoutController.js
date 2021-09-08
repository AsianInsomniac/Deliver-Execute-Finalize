const db = require('../model/db.js');
const Checkout = require('../model/checkout.js');

const checkoutController = {
    getCheckout: function(req,res){
        res.render('checkout', {success:"hidden"});
    },

    postCheckout: function(req,res){
        var email = req.body.email;
        var mobile_no = req.body.mobile_no;
        var fname = req.body.fname;
        var lname = req.body.lname;
        var street = req.body.street;
        var apartment = req.body.apartment;
        var province = req.body.province;
        var city = req.body.city;

        console.log("checking out!");

        var checkout = {
            email: email,
            mobile_no: mobile_no,
            fname: fname,
            lname: lname,
            street: street,
            apartment: apartment,
            province: province,
            city: city
        }

        db.insertOne(Checkout, checkout, function(flag){
            if (flag){
                console.log('Checkout for ' + fname + " " + lname);
                res.render('checkout', {email : req.session.email})
            }
        });
    },
};

module.exports = checkoutController;