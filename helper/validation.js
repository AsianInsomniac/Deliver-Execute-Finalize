
// import module `check` from `express-validator`
const { check } = require('express-validator');

/*
    defines an object which contains functions
    which returns array of validation middlewares
*/
const validation = {

    /*
        function which returns an array of validation middlewares
        called when the client sends an HTTP POST request for `/signup`
    */
    signupValidation: function () {

        /*
            object `validation` is an array of validation middlewares.
            the first parameter in method check() is the field to check
            the second parameter in method check() is the error message
            to be displayed when the value to the parameter fails
            the validation
        */
        var validation = [

            // checks if `E-mail` is a valid email or is not empty
            check('email', 'Please enter a valid e-mail address.').isEmail(),

            // checks if mobile is numeric and valid
            check('mobile', 'Please enter a valid mobile number.').isNumeric().isLength({min: 11, max: 11}),

            // checks if `Name` is not empty
            check('name', 'Name should not be empty.').notEmpty(),

            // checks if `pw` contains at least 8 characters
            check('password', 'Password should contain at least 8 characters.').isLength({min: 8})
        ];

        return validation;
    }
}

/*
    exports the object `validation` (defined above)
    when another script exports from this file
*/
module.exports = validation;