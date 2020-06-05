import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usersSchema = new mongoose.Schema(
    {
        // username: {
        //     type: String,
        //     required: true,
        //     unique: true,
        //     trim: true,
        //     validate: {
        //         validator: function(v) {
        //             return /^\w{0,70}$/.test(v)
        //         },
        //         message: props => `${props.value} is not a valid username!`
        //     }
        // },
        // firstname: {
        //     type: String,
        //     trim: true,
        //     // validate: {
        //     //     validator: function(v) {
        //     //         return /^[A-ZÇÄÖÜ][a-zü-è]{0,70}$/.test(v)
        //     //     },
        //     //     message: props => `${props.value} is not a valid firstname!`
        //     // }
        // },
        // sirname: {
        //     type: String,
        //     trim: true,
        //     // validate: {
        //     //     validator: function(v) {
        //     //         return /^[A-ZÇÄÖÜ][a-zü-è]{0,70}$/.test(v)
        //     //     },
        //     //     message: props => `${props.value} is not a valid sirname!`
        //     // }
        // },
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
        // phone: {
        //     type: String,
        //     trim: true,
        //     // validate: {
        //     //     validator: function(v) {
        //     //         return /^\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(v);
        //     //     },
        //     //     message: props => `${props.value} is not a valid phone number!`
        //     // }
        // },
        password: {
            type: String,
            required: true,
            // validate: {
            //     validator: function(v) {
            //         return /^[\40-\232]{8,70}$/.test(v);
            //     },
            //     message: () => `password is too short or unallowed charakters are used`
            // }
        },
        token: {
            type: String,
            required: true,
        },
    },

    { timestamps: true }
);

usersSchema.pre("save", function (next) {
    const user = this;

    bcrypt.genSalt(12, function (error, salt) {
        if (error) {
            return next(error);
        }

        bcrypt.hash(user.password, salt, function (error, hash) {
            if (error) {
                return next(error);
            }

            user.password = hash;
            next();
        });
    });
});

usersSchema.pre("updateOne", function (next) {
    const query = this;

    if (query._update.password) {
        bcrypt.genSalt(12, function (error, salt) {
            if (error) {
                return next(error);
            }

            bcrypt.hash(query._update.password, salt, function (error, hash) {
                if (error) {
                    return next(error);
                }

                query._update.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

usersSchema.methods.comparePassword = function (enteredPassword) {
    const storedPassword = this.password;

    return new Promise(function (resolve, reject) {
        bcrypt.compare(enteredPassword, storedPassword, function (
            err,
            isMatch
        ) {
            if (err) {
                reject(err);
            }

            resolve(isMatch);
        });
    });
};

module.exports = usersSchema;
