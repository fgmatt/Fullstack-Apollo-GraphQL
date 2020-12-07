import { UserInputError } from "apollo-server-express";
import User from "./userService";
import { emailValidation } from "../validation";

/**
 * to change Email of an existing user
 * @param {object} args user object
 * @returns {Promise<void>} updated user
 */
const changeEmail = async (args) => {
    const _id = args._id;
    const email = args.email;
    const password = args.password;

    if (!_id) {
        throw UserInputError("Please provide a id");
    }

    const user = await User.findOne({ _id });

    const passwordMatches = await user.comparePassword(password);

    if (user.email === email) {
        throw UserInputError("The same email");
    }

    if (!passwordMatches) {
        throw UserInputError("Invalid Password");
    }

    emailValidation(email);

    user.email = email;

    await user.save();

    return user;
};

module.exports = changeEmail;
