import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        hello: String
        user(username: String): User
    },
    type Mutation {
        signup(username: String, firstname: String, sirname: String, email: String, phone: String, password:String): User
        signin(username: String, email: String, password: String): User
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
`;

export default typeDefs;

