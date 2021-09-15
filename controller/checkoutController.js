const db = require('../model/db.js');
const Checkout = require('../model/checkout.js');
const Cart = require('../model/cart.js');

const checkoutController = {
    getCheckout: function(req,res){
        var e = req.session.email;
        let cart = [];
        var query1 = {email: e};
        var total = 0;
        console.log("Checking checkout for " + e + "...");
            db.findMany(Cart, query1, {_id:-1}, null, 0, function(x){
                for(i in x){
                    var temp ={
                        item: x[i].item,
                        qty: x[i].qty,
                        price: x[i].price,
                    }
                    total = total + (x[i].qty * x[i].price)
                    cart.push(temp)
                }
                console.log(total);
                console.log(cart);
                res.render('checkout', {res: cart, total: total, email: req.session.email, user: req.session.name});
            });
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
        var picture = req.body.picture;

        console.log("checking out!");

        var checkout = {
            email: email,
            mobile_no: mobile_no,
            fname: fname,
            lname: lname,
            street: street,
            apartment: apartment,
            province: province,
            city: city,
            picture: picture
        }

        db.insertOne(Checkout, checkout, function(flag){
            if (flag){
                console.log('Checkout for ' + fname + " " + lname);
                res.render('checkout', {email : req.session.email, user:req.session.name})
            }
        });
    },

    deleteCart: function(req,res){
        var e = req.session.email;
        db.deleteMany(Cart, function(x){
            console.log("deleted cart for" +  e);
        });
    },
};

module.exports = checkoutController;