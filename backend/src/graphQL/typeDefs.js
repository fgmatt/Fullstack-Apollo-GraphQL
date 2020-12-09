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
            userId: String!
            name: String!
            livedIn: String
            biographicalData: String
            topics: String
            biography: String
        ): Scientist
        changeScientist(
            userId: String!
            name: String!
            livedIn: String
            biographicalData: String
            topics: String
            biography: String
        ): Scientist
        changeScientistNameByName(
            userId: String!
            name: String!
            newName: String
        ): Scientist
        changeScientistLivedInByName(
            userId: String!
            name: String!
            livedIn: String
        ): Scientist
        changeScientistBiographicalDataByName(
            userId: String!
            name: String!
            biographicalData: String
        ): Scientist
        changeScientistTopicsByName(
            userId: String!
            name: String!
            topics: String
        ): Scientist
        changeScientistBiographyByName(
            userId: String!
            name: String!
            biography: String
        ): Scientist
        deleteScientistByName(userId: String!, name: String!): Scientist
        createPhilosopher(
            userId: String!
            name: String!
            livedIn: String
            biographicalData: String
            topics: String
            biography: String
            works: String
        ): Philosopher
        changePhilosopher(
            userId: String!
            name: String!
            livedIn: String
            biographicalData: String
            topics: String
            biography: String
            works: String
        ): Philosopher
        changePhilosopherNameByName(
            userId: String!
            name: String!
            newName: String
        ): Philosopher
        changePhilosopherLivedInByName(
            userId: String!
            name: String!
            livedIn: String
        ): Philosopher
        changePhilosopherBiographicalDataByName(
            userId: String!
            name: String!
            biographicalData: String
        ): Philosopher
        changePhilosopherTopicsByName(
            userId: String!
            name: String!
            topics: String
        ): Philosopher
        changePhilosopherBiographyByName(
            userId: String!
            name: String!
            biography: String
        ): Philosopher
        changePhilosopherWorksByName(
            userId: String!
            name: String!
            works: String
        ): Philosopher
        deletePhilosopherByName(userId: String!, name: String!): Philosopher
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
