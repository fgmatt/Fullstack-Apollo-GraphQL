import auth from "../services/users/index";
import filterUser from "../services/users/index";
import deluser from "../services/users/index";
import changeCreds from "../services/users/index";

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return "Hello world!";
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
        },
    },
};

export default resolvers;
