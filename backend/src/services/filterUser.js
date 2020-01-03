import { User } from '../models/mongoose';

/**
 * find user by email
 * @param args {object} user object
 * @returns {Promise<any>} found user
 */
const findByUsername = async args => {
    return await User.findOne({ email: args.email }).exec();
    
};

export default findByUsername;
