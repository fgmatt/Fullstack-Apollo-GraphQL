import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        hello: String
        userfind(email: String!): User!
        userfindById(_id: String!): User!
        searchScientistByName(name: String!): Scientist!
        allScientists: [Scientist]
    }
    type Mutation {
        signup(email: String!, password: String!): User!
        signin(email: String!, password: String!): User!
        deluser(_id: String!): User!
        changeCreds(_id: String!, email: String, password: String): User!
        changeEmail(_id: String!, email: String!, password: String!): User!
        changePassword(_id: String!, password: String!, newPassword: String!): User
        createScientist(name: String!, lived: String, topics: String, biography: String): Scientist
        changeScientist(name: String!, lived: String, topics: String, biography: String): Scientist
    }
    type User {
        _id: String
        email: String
        token: String
    }

    type Scientist {
        name: String
        lived: String
        topics: String
        biography: String
    }
`;

export default typeDefs;
