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
    const newPassword = args.newPassword

    if (!_id) {
        throw Error("Please provide a id");
    }

    const Creds = await User.findOne({ _id });

    const passwordMatches = await Creds.comparePassword(password);
    const newPasswordMatches = await Creds.comparePassword(newPassword);

    if (!passwordMatches) {
        throw Error("invalid password");
    }

    if (newPasswordMatches) {
        throw Error("the same password")
    }

    passwordValidation(newPassword);

    const query = User.updateOne({ _id }, { password: newPassword });

    return await query.exec();
};

module.exports = changePassword;
