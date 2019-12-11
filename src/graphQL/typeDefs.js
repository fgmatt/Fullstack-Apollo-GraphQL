import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        hello: String
        userfind(email: String!): User!
    },
    type Mutation {
        signup(email: String!, password: String!): User!
        signin(email: String!, password: String!): User!
        deluser(_id: String!): User!
    },
    type User {
        email: String
        token: AuthPayload!
    },
    type AuthPayload {
        token: String!
    }
`;

export default typeDefs;

