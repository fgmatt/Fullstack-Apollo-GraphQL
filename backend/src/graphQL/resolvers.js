import auth from '../services/authentication';
import filterUser from '../services/filterUser';
import deluser from '../services/deleteUser';
import changeCreds from '../services/changeCreds';

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return 'Hello world!'
        },
        userfind: (parent, args) => {
            return filterUser(args);
        },
    },
    Mutation: {
        signup: (parent, input) => {
            return auth.signup(input);
        },
        signin: (parent, input) => {
            return auth.signin(input);
        },
        deluser: (parent, input) => {
            return deluser(input);
        },
        changeCreds: (parent, input) => {
            return changeCreds(input);
        }
    },
};

export default resolvers;