const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true,
        unique: true,
        trim: true,
        // validate: {
        //     validator: function(v) {
        //         return /^\w{0,70}$/.test(v)
        //     },
        //     message: props => `${props.value} is not a valid username!`
        // }
    },
    firstname: { 
        type: String,
        trim: true,
        // validate: {
        //     validator: function(v) {
        //         return /^[A-ZÇÄÖÜ][a-zü-è]{0,70}$/.test(v)
        //     },
        //     message: props => `${props.value} is not a valid firstname!`
        // }
    },
    sirname: { 
        type: String,
        trim: true,
        // validate: {
        //     validator: function(v) {
        //         return /^[A-ZÇÄÖÜ][a-zü-è]{0,70}$/.test(v)
        //     },
        //     message: props => `${props.value} is not a valid sirname!`
        // }
    },
    email: { 
        type: String,
        required: true, 
        unique: true,
        trim: true,
        // validate: {
        //     validator: function(v) {
        //         return /^[\w+(\56\w+?)+@\w+\56\w{2,3}]{6,70}$/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid e-mail!`
        // }
    },
    phone: { 
        type: String,
        trim: true,
        // validate: {
        //     validator: function(v) {
        //         return /^\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid phone number!`
        // }
    }, 
    password: { 
        type: String, 
        required: true,
        // validate: {
        //     validator: function(v) {
        //         return /^[\40-\232]{8,70}$/.test(v);
        //     },
        //     message: () => `password is too short or unallowed charakters are used`
        // }
    }
});

module.exports = usersSchema;