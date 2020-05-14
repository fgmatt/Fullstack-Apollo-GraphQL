import  User  from "./userService";

/**
 * to change Creds of an existing user
 * @param args {object} user object
 * @returns {Promise<void>} updated user
 */
const changeCreds = async args => {
    const _id = args._id;
    const email = args.email;
    const password = args.password;

    if (!_id) {
        throw Error("Please provide a id");
    }

    const Creds = await User.findOne({ _id });

    const passwordMatches = await Creds.comparePassword(password);

    if (Creds.email === email && passwordMatches) {
        throw Error("The same email and password");
    }

    return await User.updateOne({ _id }, { email, password });
};

module.exports = changeCreds;
