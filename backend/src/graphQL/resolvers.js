import {
    auth,
    findUser,
    deluser,
    changeCreds,
    changeEmail,
    changePassword,
} from "../services/users/";
import {
    createScientist,
    searchScientistByName,
    fetchAllScientists,
    changeScientist,
    deleteScientistByName,
    changeScientistNameByName,
    changeScientistLivedInByName,
    changeScientistBiographicalDataByName,
    changeScientistTopicsByName,
    changeScientistBiographyByName,
} from "../services/scientists";
import {
    createPhilosopher,
    searchPhilosopherByName,
    fetchAllPhilosophers,
    changePhilosopher,
    deletePhilosopherByName,
    changePhilosopherNameByName,
    changePhilosopherLivedInByName,
    changePhilosopherBiographicalDataByName,
    changePhilosopherTopicsByName,
    changePhilosopherBiographyByName,
    changePhilosopherWorksByName,
} from "../services/philosophers";

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
        searchScientistByName: (parent, args) => {
            return searchScientistByName(args);
        },
        searchPhilosopherByName: (parent, args) => {
            return searchPhilosopherByName(args);
        },
        allScientists: (parent, args) => {
            return fetchAllScientists();
        },
        allPhilosophers: (parent, args) => {
            return fetchAllPhilosophers();
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
        createScientist: (parent, args) => {
            return createScientist(args);
        },
        changeScientist: (parent, args) => {
            return changeScientist(args);
        },
        changeScientistNameByName: (parent, args) => {
            return changeScientistNameByName(args);
        },
        changeScientistLivedInByName: (parent, args) => {
            return changeScientistLivedInByName(args);
        },
        changeScientistBiographicalDataByName: (parent, args) => {
            return changeScientistBiographicalDataByName(args);
        },
        changeScientistTopicsByName: (parent, args) => {
            return changeScientistTopicsByName(args);
        },
        changeScientistBiographyByName: (parent, args) => {
            return changeScientistBiographyByName(args);
        },
        deleteScientistByName: (parent, args) => {
            return deleteScientistByName(args);
        },
        createPhilosopher: (parent, args) => {
            return createPhilosopher(args);
        },
        changePhilosopher: (parent, args) => {
            return changePhilosopher(args);
        },
        changePhilosopherNameByName: (parent, args) => {
            return changePhilosopherNameByName(args);
        },
        changePhilosopherLivedInByName: (parent, args) => {
            return changePhilosopherLivedInByName(args);
        },
        changePhilosopherBiographicalDataByName: (parent, args) => {
            return changePhilosopherBiographicalDataByName(args);
        },
        changePhilosopherTopicsByName: (parent, args) => {
            return changePhilosopherTopicsByName(args);
        },
        changePhilosopherBiographyByName: (parent, args) => {
            return changePhilosopherBiographyByName(args);
        },
        changePhilosopherWorksByName: (parent, args) => {
            return changePhilosopherWorksByName(args);
        },
        deletePhilosopherByName: (parent, args) => {
            return deletePhilosopherByName(args);
        },
    },
};

export default resolvers;
