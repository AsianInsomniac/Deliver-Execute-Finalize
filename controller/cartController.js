const db = require('../model/db.js');
const Cart = require('../model/about.js');

const cartController = {
    getCart: function(req,res){
        console.log("Cart is running");
        var e = req.session.email;
        let cart = [];
        var query1 = {email: e};
        console.log("Checking cart for " + e + "...");
            db.findMany(Cart, query1, {_id:-1}, null, 0, function(x){
                
            });

        

        res.render('cart', {success:"hidden"});
    },

    deleteCart: function(req,res){
    }
};

module.exports = cartController;