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

    updateQty: function(req,res){
    }
};

module.exports = productController;