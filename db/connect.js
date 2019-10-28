const mongoose = require('mongoose');

const url = process.env.URL_MONGODB;

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url);
});

db.on('error', err => {
    console.error('connection error:', err);
});