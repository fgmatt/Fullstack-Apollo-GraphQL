import { User } from '../models/mongoose';

const deluser = async input => {
    return await User.deleteOne({_id: input._id});
};

module.exports = deluser;