import User from "./userService";
import { emailValidation } from "../validation";
import { passwordValidation } from "../validation";

/**
 * to change Creds of an existing user
 * @param args {object} user object
 * @returns {Promise<void>} updated user
 */
const changeCreds = async (args) => {
    const _id = args._id;
    const email = args.email;
    const password = args.password;

    if (!_id) {
        throw Error("Please provide a id");
    }

    const user = await User.findOne({ _id });

    const passwordMatches = await user.comparePassword(password);

    if (user.email === email && passwordMatches) {
        throw Error("The same email and password");
    }

    emailValidation(email);
    passwordValidation(password);

    user.email = email;
    user.password = password;

    await user.save();

    return user;
};

module.exports = changeCreds;
