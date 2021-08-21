const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    emailadd:{
        type: String,
        required: true,
    },
    number:{
        type: String,
        required: true,
    },
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    house_no: {
        type: String,
        required: true,
    },
    apartment: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    }
});

const User = mongoose.model
('User', userSchema);

module.exports = User;