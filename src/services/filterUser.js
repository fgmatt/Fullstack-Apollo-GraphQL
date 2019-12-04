import { User } from '../models/mongoose';

const findByUsername = async input => {
    return await User.findOne({ username: input.username }).exec();
    
};

module.exports = findByUsername;
