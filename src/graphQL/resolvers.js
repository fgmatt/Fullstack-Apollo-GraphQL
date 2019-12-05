import auth from '../services/authentication';
import filterUser from '../services/filterUser';

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return 'Hello world!'
        },
        user: (parent, input) => {
            return filterUser(input);
        },
    },
    User: {
        id: (parent) => {

        },
        username: (parent) => {

        },
        firstname: (parent) => {

        },
        sirname: (parent) => {

        },
        email: (parent) => {

        },
        phone: (parent) => {

        },
        password: (parent) => {

        }
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



export default resolvers;