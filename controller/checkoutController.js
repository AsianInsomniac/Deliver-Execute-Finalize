const db = require('../model/db.js');

const checkoutController = {
    getCheckout: function(req,res){
        res.render('checkout', {success:"hidden"});
    },

    postCheckoutProduct: function(req,res){
    }
};

module.exports = checkoutController;