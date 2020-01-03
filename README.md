# Grundstruktur
A small NodeJS Application with basic backend and frontend.

## Getting Started

### Installing npm modules
Install the npm packages with 
```
npm install
```
in */frontend* and */backend*

### Initialise the database
In */backend/package.js* in the first document under *script* it has a db script.
Modify the Url to the path of your MongoDB application to execute. 
The value of *-dbpath* is the path you store your data.
path you want store yor data. You can run it with
```
npm run db
```

### Create .env files
Create a .env file with the variables PORT, URL_MONGODB und JWT_SECRET

## Running the programm
### Running the backend
To run the backend type in */backend*
```
npm run dev
```

### Running the frontend
To run the frontend type in */frontend*
```
npm start
```

## Queries, mutation and endpoints
This section describe the available queries, mutations and endpoints

### Endpoints
All endpoints are in *src/routers*. under *src/routers/cors* is the cors configuration.
The endpoint in *helloWorld.js* returns *Hello World!*

**End

### GraphQL-Queries
In *src/graphQL* are the resolvers, schema definitions and the apolloServer configuration.
The GraphQl-Query hello defined in *typeDefs* and *resolvers* queries a hello world string. 
The GraphQl-Query userfind has 

**hello**
| Property  | PropertyType | Type   | Explanation                       |
|-----------|--------------|--------|-----------------------------------|
| none      | none         | String | It returns a HelloWorld! string   |

**userfind**
| Property  | PropertyType | Type   | Explanation                               |
|-----------|--------------|--------|-------------------------------------------|
| email     | String!      | User!  | It returns the user of the provided email |

### GraphQL-Mutations

**signup**
| Property  | PropertyType | Type   | Explanation                               |
|-----------|--------------|--------|-------------------------------------------|
| email     | String!      | User!  | It creates a user with email and password |
| password  | String!      |        |                                           |

**signin**
| Property  | PropertyType | Type   | Explanation                                                                   |
|-----------|--------------|--------|-------------------------------------------------------------------------------|
| email     | String!      | User!  | This mutation is to signin with a existing user whith email and password      |
| password  | String!      |        |                                                                               |

**deluser**
| Property  | PropertyType | Type   | Explanation                                       |
|-----------|--------------|--------|---------------------------------------------------|
| _id       | String!      | User!  | This mutation allows to delete a user with the id |

**changeCreds**
| Property  | PropertyType | Type   | Explanation                                        |
|-----------|--------------|--------|----------------------------------------------------|
| _id       | String!      | User!  | This mutation allows you to change a existing user |
| email     | String       |        |                                                    |
| password  | String       |        |                                                    |

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