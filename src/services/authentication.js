const { User } = require('../models/mongoose');
const token = require('../jwt/jwt');

const signup = async input => {
    //const _id = input._id;
    const username = input.username;
    const firstname = input.firstname;
    const sirname = input.sirname;
    const email = input.email;
    const phone = input.phone;
    const password = input.password;

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
    
    const usernameFind = await User.findOne({ username });
    const emailFind = await User.findOne({ email });
    
    if(!usernameFind && !emailFind) {
        throw new Error('Incorrect email, username or password');
    };

    const passwordMatches = await user.comparePassword(password);

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