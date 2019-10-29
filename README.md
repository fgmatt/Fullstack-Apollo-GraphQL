# Backend-Grundstruktur
A small NodeJS-Backend with REST-Endpoint and ApolloServer with GraphQl.

## Getting Started
A small bunch of instructions will lead you to make to right setup to run the programm.

### Installing npm modules
Install the npm packages with 
```
npm install
```

### Create .env files
Create a dev.env file with the variables PORT and URL_MONGODB
Create a test.env file with the same variables

## Running the programm
To run the programm type 
```
npm run dev
```

## Queries and endpoints
This section describe the available queries and endpoints

### Endpoints
All endpoints are in */routers*. under */routers/cors* is the cors configuration.
The endpoint in *helloWorld.js* returns *Hello World!*

### GraphQl-Queries
All GraphQl-Queries are in */typeDefs*. 
The GraphQl-Query in *helloWorldGraphQL.js* queries a hello world string. !cus3Uw!1D

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

*/tests/helloWorld.test.js* tests the REST-Endpoint in */routers/helloWorld.js*
*/tests/GraphQl/helloWorldGraphQL.test.js* tests the Graphql-Endpoint in */typeDefs/helloWorldDef.js*
*/tests/Resolvers/helloWorld.test.js* tests the value of the resolver
*/tests/Resolvers/resolver.test.js* loads all resolver files itselfs and tests the resolver itself 