import User from "./userService";
import { passwordValidation } from "../validation";

/**
 * to change Password of an existing user
 * @param args {object} user object
 * @returns {Promise<void>} updated user
 */
const changePassword = async (args) => {
    const _id = args._id;
    const password = args.password;
    const newPassword = args.newPassword;

    if (!_id) {
        throw Error("Please provide a id");
    }

    const user = await User.findOne({ _id });

    const passwordMatches = await user.comparePassword(password);
    const newPasswordMatches = await user.comparePassword(newPassword);

    if (!passwordMatches) {
        throw Error("invalid password");
    }

    if (newPasswordMatches) {
        throw Error("the same password");
    }

    passwordValidation(newPassword);

    user.password = newPassword;

    await user.save();

    return user;
};

module.exports = changePassword;
