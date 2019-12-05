import mongoose from 'mongoose';
import keys from '../keys/keys';

mongoose.connect(keys.url_mongodb, { useNewUrlParser: true });

const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', keys.url_mongodb);
});

db.on('error', err => {
    console.error('connection error:', err);
});