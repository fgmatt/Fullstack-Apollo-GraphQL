import { auth } from "../services/users/";
import { findUser } from "../services/users/";
import { deluser } from "../services/users/";
import { changeCreds } from "../services/users/";
import { changeEmail } from "../services/users/";
import { changePassword } from "../services/users/";

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return "Hello world!";
        },
        userfind: (parent, args) => {
            return findUser.findByUsername(args);
        },
        userfindById: (parent, args) => {
            return findUser.userfindById(args);
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
        changeEmail: (parent, args) => {
            return changeEmail(args);
        },
        changePassword: (parent, args) => {
            return changePassword(args);
        },
    },
};

export default resolvers;
