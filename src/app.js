const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
require('./db/connect');
const helloWorldRouter = require('./routers/helloWorld');
const typeDefs = require('./typeDefs/helloWorldDef');
const resolvers = require('./resolvers/helloWorldResolver');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.use(bodyParser.json());
app.use('/api',helloWorldRouter);

module.exports = app;