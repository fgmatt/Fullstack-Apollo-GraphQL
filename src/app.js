const express = require('express');
const bodyParser = require('body-parser');
require('./db/connect');
const helloWorldRouter = require('./routers/helloWorld');
const server = require('./graphQL/apollo-server');
require('./services/user');
require('./jwt/jwt');

const app = express();
server.applyMiddleware({ app });

app.use(bodyParser.json());
app.use('/api',helloWorldRouter);

module.exports = app;