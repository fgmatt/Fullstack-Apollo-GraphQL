import auth from '../services/authentication';
import filterUser from '../services/filterUser';

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return 'Hello world!'
        },
        user: (parent, args) => {
            return filterUser(args);
        },
    },
    Mutation: {
        signup: (parent, input) => {
            return auth.signup(input);
        },
        signin: (parent, input) => {
            return auth.signin(input);
        }
    },
};

export default resolvers;