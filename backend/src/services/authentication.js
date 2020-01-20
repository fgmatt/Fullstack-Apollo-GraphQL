import { User } from '../models';
import tokenSign from '../jwt/jwt';

/**
 * Sigin up a new user.
 * @param input {object} user object
 * @returns {Promise<void>} JWT for user
 */
const signup = async input => {
    // const username = input.username;
    // const firstname = input.firstname;
    // const sirname = input.sirname;
    const email = input.email;
    // const phone = input.phone;
    const password = input.password;

    if (!email /*|| !username*/ || !password) {
        throw new Error('You must provide a email, username or password');
    };

   //const existingUsername = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });

    // if (existingUsername) {
    //     throw new Error('Username already in use');
    // };

    if (existingEmail) {
        throw new Error('Email already in use');
    };

    const user = new User({
        // username,
        // firstname,
        // sirname,
        email,
        // phone,
        password,
        token: tokenSign(email).token
    });

    await user.save();

    return await user.token;
};

/**
 * Sigin in in an existing user.
 * @param input {object}
 * @returns {Promise<void>} JWT for user
 */
const signin = async input => {
    //const username = input.username;
    const email = input.email;
    const password = input.password;
    
    //const userByUsernameFind = await User.findOne({ username });
    const userByEmailFind = await User.findOne({ email });

    await console.log(userByEmailFind.email);
    
    if(/*!userByUsernameFind && */!userByEmailFind) {
        throw new Error('Incorrect email, username or password');
    };

    if(/*userByUsernameFind*/!userByEmailFind) {
        //var passwordMatches = await userByUsernameFind.comparePassword(password);
        throw Error('incorrect email or password');
    }
    else {
        var passwordMatches = await userByEmailFind.comparePassword(password);
    };

    if (passwordMatches === Error) {
        throw new Error('An error occured while verifying the password');
    };

    if (!passwordMatches) {
        throw new Error('Incorrect email, username or password');
    };

    const tokenSignin = await User.findOneAndUpdate({ email }, { token: tokenSign(userByEmailFind.email).token });

    return await tokenSignin;

};

export default {
    signin,
    signup
};