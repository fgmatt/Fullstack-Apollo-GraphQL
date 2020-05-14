import { auth } from "../services/users/";
import { findByUsername } from "../services/users/";
import { deluser } from "../services/users/";
import { changeCreds } from "../services/users/";

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return "Hello world!";
        },
        userfind: (parent, args) => {
            return findByUsername(args);
        },
    },
    Mutation: {
        signup: (parent, args) => {
            return auth.signup(args);
        },
        signin: (parent, args) => {
            return auth.signin(args);
        },
        deluser: (parent, args) => {
            return deluser(args);
        },
        changeCreds: (parent, args) => {
            return changeCreds(args);
        },
    },
};

export default resolvers;
