const db = require('../model/db.js');

const checkoutController = {
    getCheckout: function(req,res){
        res.render('checkout', {success:"hidden"});
    },

    postCheckout: function(req,res){
    }
};

module.exports = checkoutController;