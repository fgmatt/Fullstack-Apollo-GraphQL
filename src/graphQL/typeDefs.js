import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        hello: String
        user(username: String): User
    },
    type Mutation {
        signup(email: String, password: String): User
        signin(email: String, password: String): User
    },
    type User {
        id: ID!
        email: String
        password: String
    },
`;

export default typeDefs;

