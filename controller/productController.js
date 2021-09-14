const db = require('../model/db.js');

const productController = {
    getProduct: function(req,res){
        item = req.params.id;
        console.log(item);
        req.session.show = item;
        var p = {
            item: "",
            qty: 0,
            image: "",
            info: ""
        };
        res.render('product', {success:"hidden"});
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

    },
    postProduct: function(req,res){

    }
};

module.exports = productController;