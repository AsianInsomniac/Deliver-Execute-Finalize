const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    item:{
        type: String,
        required: true,
    },
    qty:{
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model ('Cart', cartSchema);