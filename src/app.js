import express from 'express';
import bodyParser from 'body-parser';
import './db/connect';
import helloWorldRouter from './routers/helloWorld';
import server from './graphQL/apollo-server';
import './services/user';
import './jwt/jwt';

const app = express();
server.applyMiddleware({ app });

app.use(bodyParser.json());
app.use('/api',helloWorldRouter);

module.exports = app;