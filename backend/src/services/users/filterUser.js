import User from "./userService";

/**
 * find user by email
 * @param args {object} user object
 * @returns {Promise<any>} found user
 */
const findByUsername = async (args) => {
    return await User.findOne({ email: args.email }).exec();
};

const userfindById = async (args) => {
    return await User.findOne({ _id: args._id }).exec();
};

module.exports = { findByUsername, userfindById };
