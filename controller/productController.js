const db = require('../model/db.js');
const Cart = require('../model/cart.js');

const productController = {
    getClassic: function(req,res){
        req.session.item = classic;
        res.render('fbclassic', {item: "classic"});
    },

    getRed: function(req,res){
        req.session.item = blue;
        res.render('fbred', {item: "red"});
    },

    getPink: function(req,res){       
        req.session.item = pink; 
        res.render('fbpink', {item:"pink"});
    },

    getBlue: function(req,res){
        req.session.item = blue;
        res.render('fbblue', {item:"blue"});
    },

    getYellow: function(req,res){
        req.session.item = yellow;
        res.render('fbyellow', {item:"yellow"});
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

    addToCart: function(req, res){
        console.log(req.session.item);
        var e = req.session.email;
        var i = req.session.item;
        var query1 = {email: e};
        var query2 = {item: i};

        var product = {
            email: e,
            item: i,
            qty: 0
        }
        
        db.findOne(Cart, query1, null, function(x){
            if (x){
                db.findOne(Cart, query2, null, function(y){
                    if (y){
                        res.render('fb' + i, {error: "Item in cart already"});
                    }
                    else{
                        db.insertOne(Cart, product, function(flag){
                            if (flag){
                                console.log('Added to cart ' + i + ' for ' + e);
                                res.render('fb' + i);
                            }
                        });
                    }           
                });
            }
        });
    }
};

module.exports = productController;