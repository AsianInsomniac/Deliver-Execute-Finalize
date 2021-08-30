const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    house_no: {
        type: String,
    },
    apartment: {
        type: String,
    },
    city: {
        type: String,
    },
    province: {
        type: String,
    }
});

module.exports = mongoose.model ('User', userSchema);