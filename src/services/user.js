const createUser = require('./createUser')

var example = {
    username: 'Nodemon',
    firstname: 'Margarethe',
    sirname: 'Muster',
    email: 'example@nodemon.com',
    phone: '099 111 22 33',
    password: 'dummy123$'
}

var example2 = {
    username: 'slash4512',
    firstname: 'Mario',
    sirname: 'Merchant',
    email: 'example@merchant.com',
    phone: '099 666 22 33',
    password: 'hash123$$'
}

createUser(example);
createUser(example2);


