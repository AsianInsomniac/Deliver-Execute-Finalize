const db = require('../model/db.js');
const User = require('../model/user.js');
const Checkout = require('../model/checkout.js');
const Cart = require('../model/cart.js');
let alert = require('alert');

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
				
				if(cart.length > 0) {
					var userData = {
						res: cart,
						total: total
					}
					
					db.findOne(User, query1, null, function(y) {
						if(y) {
							userData["email"] = y.email;
							userData["user"] = y.name;
							userData["mobile"] = y.mobile;

							res.render('checkout', userData);
						}
					});
				}
				else
					res.redirect("/cart");
				
				
            });
    },

    postCheckout: function(req,res){
        var emailbody = req.body.email;
        var mobile_no = req.body.mobile_no;
        var fname = req.body.fname;
        var lname = req.body.lname;
        var street = req.body.street;
        var apartment = req.body.apartment;
        var province = req.body.province;
        var city = req.body.city;
        var picture = req.body.picture;
        let cart = [];
        var e = req.session.email;
        var query1 = {email: e};

        console.log("checking out!");

        db.findMany(Cart, query1, {_id:-1}, null, 0, function(x){
            for(i in x){
                var temp ={
                    item: x[i].item,
                    qty: x[i].qty,
                    price: x[i].price,
                }
                cart.push(temp);
                console.log(cart);
                console.log("PUSHH ++++++")  
            }

            for (i in cart){
                console.log(cart[i].item);
                console.log(cart[i].qty);
                console.log(cart[i].price);
            }

            var checkout = {
                email: emailbody,
                mobile_no: mobile_no,
                fname: fname,
                lname: lname,
                street: street,
                apartment: apartment,
                province: province,
                city: city,
                picture: picture,
                cart: cart
            }
    
            db.insertOne(Checkout, checkout, function(flag){
                if (flag){
                    console.log(checkout);
                    console.log('Checkout for ' + fname + " " + lname);
                    alert("Checkout Complete!");
                    res.render('shop', {email : req.session.email, user:req.session.name})
                }
            });
        }); 

        db.deleteMany(Cart, {email: emailbody});
    },
};

module.exports = checkoutController;