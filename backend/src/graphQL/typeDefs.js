import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        hello: String
        userfind(email: String!): User!
        userfindById(_id: String!): User!
    }
    type Mutation {
        signup(email: String!, password: String!): User!
        signin(email: String!, password: String!): User!
        deluser(_id: String!): User!
        changeCreds(_id: String!, email: String, password: String): User!
        changeEmail(_id: String!, email: String!, password: String!): User!
        changePassword(_id: String!, password: String!, newPassword: String!): User
    }
    type User {
        _id: String
        email: String
        token: String
    }
`;

export default typeDefs;
