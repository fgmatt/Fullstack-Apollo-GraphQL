import { User } from '../models/mongoose';

const findByUsername = async args => {
    return await User.findOne({ email: args.email }).exec();
    
};

export default findByUsername;
