import User from "./userService";
import { emailValidation } from "../validation";

/**
 * to change Email of an existing user
 * @param args {object} user object
 * @returns {Promise<void>} updated user
 */
const changeEmail = async (args) => {
    const _id = args._id;
    const email = args.email;
    const password = args.password;

    if (!_id) {
        throw Error("Please provide a id");
    }

    const user = await User.findOne({ _id });

    const passwordMatches = await user.comparePassword(password);

    if (user.email === email) {
        throw Error("The same email");
    }

    if (!passwordMatches) {
        throw Error("Invalid Password");
    }

    emailValidation(email);

    user.email = email;

    await user.save();

    return user;
};

module.exports = changeEmail;
