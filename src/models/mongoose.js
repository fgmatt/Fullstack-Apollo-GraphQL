import mongoose from 'mongoose';
import philosophersSchema from './schemas/philosophers';
import scientistsSchema from './schemas/scientists';
import usersSchema from './schemas/users';

const Philosophers = mongoose.model('Philosophers', philosophersSchema);
const Scientists = mongoose.model('Scientists', scientistsSchema);
const User = mongoose.model('Users', usersSchema);

export default {
    Philosophers,
    Scientists,
    User
};