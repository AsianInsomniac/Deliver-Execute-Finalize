const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    mobile_no: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model ('About', aboutSchema);