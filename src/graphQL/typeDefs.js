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
        signup(username: String!, firstname: String, sirname: String, email: String!, phone: String, password:String!): String
    },
`;

module.exports = typeDefs;

