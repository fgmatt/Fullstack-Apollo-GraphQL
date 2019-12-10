import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        hello: String
        user(username: String): User
    },
    type Mutation {
        signup(email: String!, password: String!): AuthPayload!
        signin(email: String!, password: String!): AuthPayload!
    },
    type User {
        #id: ID!
        email: String
        password: String
    },
    type AuthPayload {
        token: String!
    }
`;

export default typeDefs;

