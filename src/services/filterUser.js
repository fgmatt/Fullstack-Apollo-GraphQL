const { User } = require('../models/mongoose');

async function findByUsername(username) {
    const doc = await User.findOne({ username: username }).exec();
    console.log(doc);
    return doc;
};

module.exports = findByUsername;
