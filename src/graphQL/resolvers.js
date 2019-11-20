const createUser = require('../services/createUser');
const ExampleCreateUser = require('../services/user');
const filterUser = require('../services/filterUser');

const finduser = 'janusoftheday';

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return 'Hello world!'
        },
        user: (finduser) => {
            return filterUser(finduser)
        },
    },
    Mutation: {
        signUp: (parent, args, context) => {
            return createUser(ExampleCreateUser)
        },
    },
};



module.exports = resolvers;