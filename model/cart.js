const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
    },
    item:{
        type: String,
        required: true,
    },
    qty:{
        type: Integer,
        required: true,
    }
});

module.exports = mongoose.model ('Cart', cartSchema);