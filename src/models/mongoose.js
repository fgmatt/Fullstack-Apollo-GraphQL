const philosophersSchema = require('./philosophers.philosophers');
const scientistsSchema = require('./scientists.scientists');
const usersSchema = require('./users');

const Philosophers = mongoose.model('Philosophers', philosophersSchema);
const Scientists = mongoose.model('Scientists', scientistsSchema);
const users = mongoose.model('Users', usersSchema);