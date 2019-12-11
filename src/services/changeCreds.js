import { User } from '../models/mongoose';

const changeCreds = async input => {
    const _id = input._id;
    const email = input.email;
    const password = input.password;

    if(!_id) {
        throw Error('Please provide a id');
    };

    const Creds = await User.findOne({ _id });

    const passwordMatches = await Creds.comparePassword(password)

    if(Creds.email === email && passwordMatches) {
        throw Error('The same email and password');
    }

    return await User.updateOne({ _id }, { email, password });

};

module.exports = changeCreds;
