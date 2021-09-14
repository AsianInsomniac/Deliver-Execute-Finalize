const db = require('../model/db.js');

const productController = {
    getClassic: function(req,res){
        item = req.params.itemname;
        console.log(item);
        
        res.render('fbclassic', {success:"hidden"});
    },

    getRed: function(req,res){
        item = req.params.itemname;
        console.log(item);
        req.session.show = item;
        
        res.render('fbred', {success:"hidden"});
    },

    getPink: function(req,res){
        item = req.params.itemname;
        console.log(item);
        req.session.show = item;
        
        res.render('fbpink', {success:"hidden"});
    },

    getBlue: function(req,res){
        item = req.params.itemname;
        console.log(item);
        req.session.show = item;
        
        res.render('fbblue', {success:"hidden"});
    },

    getYellow: function(req,res){
        item = req.params.itemname;
        console.log(item);
        req.session.show = item;
        
        res.render('fbyellow', {success:"hidden"});
    },

    //var cartItems = req.session.product; --> the "product" part can change depending on the name used in the #each HBS
    updateQty: function(req,res){
        var cartItems = req.session.product;
        //if qty == 0, remove from cart
        if(qty == 0){
            console.log(req.session.id);
            //check each item in cart n return the item id if its != to the id in the param
            cartItems = cartItems.filter(function(cartItems){
                return cartItems.id !== parseInt(req.params.id);
            })
            console.log(cartItems)
            req.session.product = cartItems;
            res.render("cart", {"products" : req.session.cartItems});
        }

    }
};

module.exports = productController;