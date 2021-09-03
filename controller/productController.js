const db = require('../model/db.js');

const productController = {
    getProduct: function(req,res){
        res.render('product', {success:"hidden"});
    },

    postProduct: function(req,res){
    }
};

module.exports = productController;