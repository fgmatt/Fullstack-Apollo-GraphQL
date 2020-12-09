import { UserInputError } from "apollo-server-express";
import { User } from "./userService";
import { passwordValidation } from "../validation";

/**
 * to change Password of an existing user
 * @param {object} args user object
 * @returns {Promise<void>} updated user
 */
const changePassword = async (args) => {
    const _id = args._id;
    const password = args.password;
    const newPassword = args.newPassword;

    if (!_id) {
        throw new UserInputError("Please provide a id");
    }

    const user = await User.findOne({ _id });

    const passwordMatches = await user.comparePassword(password);
    const newPasswordMatches = await user.comparePassword(newPassword);

    if (!passwordMatches) {
        throw new UserInputError("invalid password");
    }

    if (newPasswordMatches) {
        throw new UserInputError("the same password");
    }

    passwordValidation(newPassword);

    user.password = newPassword;

    await user.save();

    return user;
};

module.exports = changePassword;
