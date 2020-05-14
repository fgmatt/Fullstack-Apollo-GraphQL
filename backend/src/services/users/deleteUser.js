import  User  from "./userService";

/**
 * delete user by id
 * @param args {object} user object
 * @returns {Promise<any>} deleted user
 */
const deluser = async args => {
    const _id = args._id;

    if (!_id) {
        throw Error("You must provide a id");
    }

    return await User.findByIdAndDelete(_id);
};

module.exports = deluser;
