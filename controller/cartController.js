const db = require('../model/db.js');
const Cart = require('../model/cart.js');

const cartController = {
    getCart: function(req,res){
        console.log("Cart is running");
        var e = req.session.email;
        let cart = [];
        var query1 = {email: e};
        console.log("Checking cart for " + e + "...");
            db.findMany(Cart, query1, {_id:-1}, null, 0, function(x){
                for(i in x){
                    var temp ={
                        item: x[i].item,
                        qty: x[i].qty,
                        price: x[i].price,
                    }
                    
                    cart.push(temp)
                }
                console.log(cart);
                res.render('cart', {result: cart, email: req.session.email, user: req.session.name});
            });
    },

    deleteCart: function(req,res){
        var e = req.session.email;
        db.deleteMany(Cart, function(x){
            console.log("deleted cart for" +  e);
        });
    },

};

module.exports = cartController;