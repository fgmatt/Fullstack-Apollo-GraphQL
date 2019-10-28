const mongoose = require('mongoose');
const { url_mongodb } = require('../keys/keys')

mongoose.connect(url_mongodb, { useNewUrlParser: true });

const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url_mongodb);
});

db.on('error', err => {
    console.error('connection error:', err);
});