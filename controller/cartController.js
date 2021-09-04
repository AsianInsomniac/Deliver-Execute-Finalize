const db = require('../model/db.js');
const Cart = require('../model/about.js');

const cartController = {
    getCart: function(req,res){
        res.render('cart', {success:"hidden"});
    },

    deleteCart: function(req,res){
    }
};

module.exports = cartController;