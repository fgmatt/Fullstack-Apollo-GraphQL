const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { port } = require('../keys/keys')

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    playground: { endpoint: `http://localhost:${port}/playground`} 
});

module.exports = server;