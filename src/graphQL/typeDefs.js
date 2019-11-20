const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        hello: String
        user: String
    },
    type User {
        id: ID!
        username: String
        firstname: String
        sirname: String
        email: String
        phone: String
        password: String
    },
    type Mutation {
        signUp(username: String!, firstname: String, sirname: String, email: String!, phone: String, password:String!): User
    },
`;

module.exports = typeDefs;

