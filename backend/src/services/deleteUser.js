import { User } from '../models/mongoose';

const deluser = async input => {
    const _id = input._id;

    if(!_id) {
        throw Error('You must provide a id');
    };

        return await User.findByIdAndDelete( _id);

};

module.exports = deluser;