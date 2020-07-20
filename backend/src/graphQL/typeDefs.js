import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        hello: String
        userfind(email: String!): User!
        userfindById(_id: String!): User!
        searchScientistByName(name: String!): Scientist!
        searchPhilosopherByName(name: String!): Philosopher!
        allScientists: [Scientist]
        allPhilosophers: [Philosopher]
    }
    type Mutation {
        signup(email: String!, password: String!): User!
        signin(email: String!, password: String!): User!
        deluser(_id: String!): User!
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
        deletePhilosopherByName(name: String!): Philosopher
    }
    type User {
        _id: String
        email: String
        token: String
    }

    type Scientist {
        name: String
        livedIn: String
        biographicalData: String
        topics: String
        biography: String
    }

    type Philosopher {
        name: String
        livedIn: String
        biographicalData: String
        topics: String
        biography: String
        works: String
    }
`;

export default typeDefs;
