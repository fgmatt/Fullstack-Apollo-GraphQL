import User from "./userService";
import tokenSign from "../../jwt/jwt";
import { emailValidation } from "../validation";
import { passwordValidation } from "../validation";

/**
 * Sigin up a new user.
 * @param args {object} user object
 * @returns {Promise<void>} JWT for user
 */
const signup = async args => {
    // const username = args.username;
    // const firstname = args.firstname;
    // const sirname = args.sirname;
    const email = args.email;
    // const phone = args.phone;
    const password = args.password;

    if (!email /*|| !username*/ || !password) {
        throw new Error("You must provide a email, username or password");
    }

    emailValidation(email);
    passwordValidation(password);

    //const existingUsername = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });

    // if (existingUsername) {
    //     throw new Error('Username already in use');
    // };

    if (existingEmail) {
        throw new Error("Email already in use");
    }

    const user = new User({
        // username,
        // firstname,
        // sirname,
        email,
        // phone,
        password,
        token: tokenSign(email).token,
    });

    await user.save();

    return await user.token;
};

/**
 * Sigin in an existing user.
 * @param args {object}
 * @returns {Promise<void>} JWT for user
 */
const signin = async args => {
    //const username = args.username;
    const email = args.email;
    const password = args.password;

    //const userByUsernameFind = await User.findOne({ username });
    const userByEmailFind = await User.findOne({ email });

    if (/*!userByUsernameFind && */ !userByEmailFind) {
        throw new Error("Incorrect email, username or password");
    }

    if (/*userByUsernameFind*/ !userByEmailFind) {
        //var passwordMatches = await userByUsernameFind.comparePassword(password);
        throw Error("incorrect email or password");
    } else {
        var passwordMatches = await userByEmailFind.comparePassword(password);
    }

    if (passwordMatches === Error) {
        throw new Error("An error occured while verifying the password");
    }

    if (!passwordMatches) {
        throw new Error("Incorrect email, username or password");
    }

    const Signin = await User.findOneAndUpdate(
        { email },
        { token: tokenSign(userByEmailFind.email).token }
    );

    await Signin;

    return await User.findOne({ email });
};

export default {
    signin,
    signup,
};
