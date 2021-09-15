const db = require('../model/db.js');
const Cart = require('../model/cart.js');

const cartController = {
    getCart: function(req,res){
        console.log("Cart is running");
        var e = req.session.email;
        let cart = [];
        var query1 = {email: e};
        var total = 0;
        console.log("Checking cart for " + e + "...");
            db.findMany(Cart, query1, {_id:-1}, null, 0, function(x){
                for(i in x){
                    var temp ={
                        item: x[i].item,
                        qty: x[i].qty,
                        price: x[i].price,
                    }
                    total = total + (x[i].qty * x[i].price);
                    console.log ("x[i].qty " + temp.qty + "asdfasdfasf");
                    if (temp.qty != 0)
                        cart.push(temp)
                }
                console.log(total);
                console.log(cart);
                
                res.render('cart', {result: cart, total: total, email: req.session.email, user: req.session.name});
            });
    },

    deleteOneCart: function(req, res){
        var e = req.session.email;
        db.deleteOne(Cart, function(x){
            console.log("deleted one for" + e);
        });
    },

};

module.exports = cartController;