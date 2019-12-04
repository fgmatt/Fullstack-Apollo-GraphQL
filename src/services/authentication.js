import { User } from '../models/mongoose';
import token from '../jwt/jwt';

const signup = async input => {
    //const _id = input._id;
    const username = input.username;
    const firstname = input.firstname;
    const sirname = input.sirname;
    const email = input.email;
    const phone = input.phone;
    const password = input.password;

    if (!email || !username || !password) {
        throw new Error('You must provide a email, username or password');
    }

    const existingUsername = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });

    if (existingUsername) {
        throw new Error('Username already in use');
    }

    if (existingEmail) {
        throw new Error('Email already in use');
    }

    const user = new User({
        //_id,
        username,
        firstname,
        sirname,
        email,
        phone,
        password
    });

    await user.save();

    return await token(user);
};

const signin = async input => {
    const username = input.username;
    const email = input.email;
    const password = input.password;
    
    const userByUsernameFind = await User.findOne({ username });
    const userByEmailFind = await User.findOne({ email });
    
    if(!userByUsernameFind && !userByEmailFind) {
        throw new Error('Incorrect email, username or password');
    };

    if(userByUsernameFind) {
        var passwordMatches = await userByUsernameFind.comparePassword(password);
    }
    else {
        var passwordMatches = await userByEmailFind.comparePassword(password);
    }

    if (passwordMatches === Error) {
        throw new Error('An error occured while verifying the password');
    }

    if (!passwordMatches) {
        throw new Error('Incorrect email, username or password');
    }

    return await token(user);

};

module.exports = {
    signin,
    signup
};