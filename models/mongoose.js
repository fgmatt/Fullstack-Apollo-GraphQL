const philosophersSchema = require('./philosophers.philosophers');
const scientistsSchema = require('./scientists.scientists');

const Philosophers = mongoose.model('Philosophers', philosophersSchema);
const Scientists = mongoose.model('Scientists', scientistsSchema);