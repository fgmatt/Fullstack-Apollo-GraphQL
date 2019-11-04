const mongoose = require('mongoose');
const philosophersSchema = require('./schemas/philosophers');
const scientistsSchema = require('./schemas/scientists');
const usersSchema = require('./schemas/users');

const Philosophers = mongoose.model('Philosophers', philosophersSchema);
const Scientists = mongoose.model('Scientists', scientistsSchema);
const User = mongoose.model('Users', usersSchema);

module.exports = {
    Philosophers,
    Scientists,
    User
};