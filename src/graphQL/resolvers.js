const auth = require('../services/authentication');
const ExampleCreateUser = require('../services/user');
const filterUser = require('../services/filterUser');

const finduser = 'janusoftheday';

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return 'Hello world!'
        },
        user: (finduser) => {
            return filterUser(finduser);
        },
    },
    Mutation: {
        signup: (parent, input) => {
            return auth.signup(input);
        },
        signin: (parent, input) => {
            return auth.sigin(input);
        }
    },
};



module.exports = resolvers;