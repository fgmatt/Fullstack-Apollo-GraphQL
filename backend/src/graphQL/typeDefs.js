import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        hello: String
        userfind(email: String!, token: String!): User!
        userfindById(_id: String!, token: String!): User!
        searchScientistByName(name: String!): Scientist!
        searchPhilosopherByName(name: String!): Philosopher!
        allScientists: [Scientist]
        allPhilosophers: [Philosopher]
    }
    type Mutation {
        signup(email: String!, password: String!): User!
        signin(email: String!, password: String!): User!
        deluser(_id: String!, password: String!): User!
        changeCreds(_id: String!, email: String, password: String): User!
        changeEmail(_id: String!, email: String!, password: String!): User!
        changePassword(
            _id: String!
            password: String!
            newPassword: String!
        ): User
        createScientist(
            name: String!
            livedIn: String
            biographicalData: String
            topics: String
            biography: String
        ): Scientist
        changeScientist(
            name: String!
            livedIn: String
            biographicalData: String
            topics: String
            biography: String
        ): Scientist
        changeScientistNameByName(name: String!, newName: String): Scientist
        changeScientistLivedInByName(name: String!, livedIn: String): Scientist
        changeScientistBiographicalDataByName(
            name: String!
            biographicalData: String
        ): Scientist
        changeScientistTopicsByName(name: String!, topics: String): Scientist
        changeScientistBiographyByName(
            name: String!
            biography: String
        ): Scientist
        deleteScientistByName(name: String!): Scientist
        createPhilosopher(
            name: String!
            livedIn: String
            biographicalData: String
            topics: String
            biography: String
            works: String
        ): Philosopher
        changePhilosopher(
            name: String!
            livedIn: String
            biographicalData: String
            topics: String
            biography: String
            works: String
        ): Philosopher
        changePhilosopherNameByName(name: String!, newName: String): Philosopher
        changePhilosopherLivedInByName(
            name: String!
            livedIn: String
        ): Philosopher
        changePhilosopherBiographicalDataByName(
            name: String!
            biographicalData: String
        ): Philosopher
        changePhilosopherTopicsByName(
            name: String!
            topics: String
        ): Philosopher
        changePhilosopherBiographyByName(
            name: String!
            biography: String
        ): Philosopher
        changePhilosopherWorksByName(name: String!, works: String): Philosopher
        deletePhilosopherByName(name: String!): Philosopher
    }
    type User {
        _id: String
        email: String
        token: String
    }

    type Scientist {
        _id: String
        name: String
        livedIn: String
        biographicalData: String
        topics: String
        biography: String
    }

    type Philosopher {
        _id: String
        name: String
        livedIn: String
        biographicalData: String
        topics: String
        biography: String
        works: String
    }
`;

export default typeDefs;
