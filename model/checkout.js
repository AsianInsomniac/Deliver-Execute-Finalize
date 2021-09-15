const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    mobile_no: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    apartment: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true
    },    
    cart: [
        {
            email: String,
            item: String,
            qty: Number,
            price: Number
        }
    ]
});

module.exports = mongoose.model ('Checkout', checkoutSchema);