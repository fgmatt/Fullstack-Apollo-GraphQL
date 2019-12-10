import { User } from '../models/mongoose';

const findByUsername = async args => {
    return await User.findOne({ username: args.username }).exec();
    
};

export default findByUsername;
