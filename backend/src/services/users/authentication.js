import { AuthenticationError, UserInputError } from "apollo-server-express";
import { User, TokenThinkers } from "./userService";
import { tokenSign, tokenThinker } from "../../jwt/jwt";
import { emailValidation } from "../validation";
import { passwordValidation } from "../validation";

/**
 * Sigin up a new user.
 * @param {object} args user object
 * @returns {Promise<void>} JWT for user
 */
const signup = async (args) => {
    // const username = args.username;
    // const firstname = args.firstname;
    // const sirname = args.sirname;
    const email = args.email;
    // const phone = args.phone;
    const password = args.password;

    if (!email /*|| !username*/ || !password) {
        throw new UserInputError(
            "You must provide a email, username or password"
        );
    }

    emailValidation(email);
    passwordValidation(password);

    //const existingUsername = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });

    // if (existingUsername) {
    //     throw new Error('Username already in use');
    // };

    if (existingEmail) {
        throw new UserInputError("Email already in use");
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
 * @param {object} args
 * @returns {Promise<void>} JWT for user
 */
const signin = async (args) => {
    //const username = args.username;
    const email = args.email;
    const password = args.password;

    //const userByUsernameFind = await User.findOne({ username });
    const userByEmailFind = await User.findOne({ email });

    if (/*!userByUsernameFind && */ !userByEmailFind) {
        throw new AuthenticationError("Incorrect email, username or password");
    }

    if (/*userByUsernameFind*/ !userByEmailFind) {
        //var passwordMatches = await userByUsernameFind.comparePassword(password);
        throw new AuthenticationError("incorrect email or password");
    } else {
        var passwordMatches = await userByEmailFind.comparePassword(password);
    }

    if (passwordMatches === Error) {
        throw new AuthenticationError(
            "An error occured while verifying the password"
        );
    }

    if (!passwordMatches) {
        throw new AuthenticationError("Incorrect email, username or password");
    }

    const acessToken = new TokenThinkers({
        token: tokenThinker(),
        userId: userByEmailFind._id,
    });

    await acessToken.save();

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
