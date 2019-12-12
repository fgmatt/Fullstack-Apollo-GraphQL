# Backend-Grundstruktur
A small NodeJS-Backend with REST-Endpoint and ApolloServer with GraphQl.

## Getting Started
A small bunch of instructions will lead you to make to right setup to run the programm.

### Installing npm modules
Install the npm packages with 
```
npm install
```
### Initialise the database
In package.json in the first document under *script* it has a db script.
Modify the Url to the path of your MongoDB application to execute. 
The value of *-dbpath* is the path you store your data.
path you want store yor data. You can run it with
```
npm run db
```

### Create .env files
Create a dev.env file with the variables PORT and URL_MONGODB
Create a test.env file with the same variables

## Running the programm
To run the programm type 
```
npm run dev
```

## Queries, mutation and endpoints
This section describe the available queries and endpoints

### Endpoints
All endpoints are in *src/routers*. under *src/routers/cors* is the cors configuration.
The endpoint in *helloWorld.js* returns *Hello World!*

### GraphQl-Queries
In *src/graphQL* are the resolvers, schema definitions and the apolloServer configuration.
The GraphQl-Query hello defined in *typeDefs* and *resolvers* queries a hello world string. 
The GraphQl-Query userfind has 

## Testing
The Testing section explains how to run the tests and describe in short the tests

### Run tests
To run all tests use
```
npm run test
```
Watch modus is enabled

### Test descriptions
It have some tests to to test the Graphql- and REST-Endpoints and the Graphql-Resolver

*src/tests/helloWorld.test.js* tests the REST-Endpoint in *src/routers/helloWorld.js*
*src/tests/GraphQl/helloWorldGraphQL.test.js* tests the Graphql-Endpoint in *src/typeDefs/helloWorldDef.js*
*src/tests/Resolvers/helloWorld.test.js* tests the value of the resolver
*src/tests/Resolvers/resolver.test.js* loads all resolver files itselfs and tests the resolver itself 