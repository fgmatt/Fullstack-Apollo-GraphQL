import { UserInputError } from "apollo-server-express";
import User from "./userService";

/**
 * delete user by id
 * @param {object} args user object
 * @returns {Promise<any>} deleted user
 */
const deluser = async (args) => {
    const _id = args._id;
    const password = args.password;

    if (!_id) {
        throw UserInputError("You must provide a id");
    }

    const user = await User.findOne({ _id });

    const passwordMatches = await user.comparePassword(password);

    if (!passwordMatches) {
        throw UserInputError("invalid password");
    }

    return await User.findByIdAndDelete(_id);
};

module.exports = deluser;
