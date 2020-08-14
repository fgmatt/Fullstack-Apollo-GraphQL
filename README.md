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

### GraphQL-Objects

**User**

| Field | Type   |
|-------|--------|
| _id   | String |
| email | String |
| token | String |

**Scientist**

| Field            | Type   |
|------------------|--------|
| _id              | String |
| name             | String |
| livedIn          | String |
| biographicalData | String |
| topics           | String |
| biography        | String |


**Philosopher**

| Field            | Type   |
|------------------|--------|
| name             | String |
| livedIn          | String |
| biographicalData | String |
| topics           | String |
| biography        | String |
| works            | String |

### GraphQL-Queries
In *src/graphQL* are the resolvers, schema definitions and the apolloServer configuration.
The GraphQl-Query hello defined in *typeDefs* and *resolvers* queries a hello world string. 
The GraphQl-Query userfind has 

**hello**

| Type   | Explanation                       |
|--------|-----------------------------------|
| String | It returns a HelloWorld! string   |

**userfind**

| Type   | Explanation                               |
|--------|-------------------------------------------|
| User!  | It returns the user of the provided email |

| Property  | PropertyType | 
|-----------|--------------|
| email     | String!      |

**userfindById**

| Type   | Explanation                  |
|--------|------------------------------|
| User!  | It returns a user by his id  |

| Property  | PropertyType | 
|-----------|--------------|
| _id       | String!      |

**searchScientistByName**

| Type       | Explanation                            |
|------------|----------------------------------------|
| Scientist! | Returns a scientist object by his name |

| Property  | PropertyType | 
|-----------|--------------|
| name      | String!      |

**searchPhilosopherByName**

| Type         | Explanation                              |
|--------------|------------------------------------------|
| Philosopher! | Returns a philosopher object by his name |

| Property  | PropertyType | 
|-----------|--------------|
| name      | String!      |

**allScientists**

| Type           | Explanation                               |
|----------------|-------------------------------------------|
| \[Scientist\]  | Returns an array of all scientist objects |

**allPhilosophers**

| Type             | Explanation                                 |
|------------------|---------------------------------------------|
| \[Philosopher\]  | Returns an array of all philosopher objects |



### GraphQL-Mutations

**signup**

| Type   | Explanation                               |
|--------|-------------------------------------------|
| User!  | It creates a user with email and password |

| Property  | PropertyType |
|-----------|--------------|
| email     | String!      |
| password  | String!      |  

**signin**

| Type   | Explanation                                                                   |
|--------|-------------------------------------------------------------------------------|
| User!  | This mutation is to signin with a existing user whith email and password      |

| Property  | PropertyType |
|-----------|--------------|
| email     | String!      |
| password  | String!      |                                                                              

**deluser**

| Type   | Explanation                                       |
|--------|---------------------------------------------------|
| User!  | This mutation allows to delete a user with the id |

| Property  | PropertyType |
|-----------|--------------|
| _id       | String!      |

**changeCreds**

| Type   | Explanation                                        |
|--------|----------------------------------------------------|
| User!  | This mutation allows you to change a existing user |

| Property  | PropertyType |
|-----------|--------------|
| _id       | String!      |
| email     | String       |
| password  | String       |

**changeEmail**

| Type   | Explanation                                      |
|--------|--------------------------------------------------|
| User!  | This mutation changes the email of an user by id |

| Property  | PropertyType |
|-----------|--------------|
| _id       | String!      |
| email     | String       |
| password  | String       |

**changePassword**

| Type   | Explanation                                         |
|--------|-----------------------------------------------------|
| User   | This mutation changes the password of an user by id |

| Property    | PropertyType |
|-------------|--------------|
| _id         | String!      |
| password    | String!      |
| newPassword | String!      |

**createScientist**

| Type      | Explanation                                    |
|-----------|------------------------------------------------|
| Scientist | This mutation create a new scientist object    |

| Property         | PropertyType |
|------------------|--------------|
| name             | String!      |
| livedIn          | String       |
| biographicalData | String       |
| topics           | String       |
| biography        | String       |

**changeScientist**

| Type      | Explanation                                                     |
|-----------|-----------------------------------------------------------------|
| Scientist | This mutation change a scientist object excluding name by name  |

| Property         | PropertyType |
|------------------|--------------|
| name             | String!      |
| livedIn          | String       |
| biographicalData | String       |
| topics           | String       |
| biography        | String       |

**changeScientistNameByName**

| Type      | Explanation                                                  |
|-----------|--------------------------------------------------------------|
| Scientist | This mutation change the name of a scientist object by name  |

| Property    | PropertyType |
|-------------|--------------|
| name        | String!      |
| newName     | String       |

**changeScientistLivedInByName**

| Type      | Explanation                                                  |
|-----------|--------------------------------------------------------------|
| Scientist | This mutation change livedIn of a scientist object by name   |

| Property    | PropertyType |
|-------------|--------------|
| name        | String!      |
| livedIn     | String       |

**changeScientistBiographicalDataByName**

| Type      | Explanation                                                          |
|-----------|----------------------------------------------------------------------|
| Scientist | This mutation change biographicalData of a scientist object by name  |

| Property          | PropertyType |
|-------------------|--------------|
| name              | String!      |
| biographicalData  | String       |

**changeScientistTopicsByName**

| Type      | Explanation                                                |
|-----------|------------------------------------------------------------|
| Scientist | This mutation change topics of a scientist object by name  |

| Property     | PropertyType |
|--------------|--------------|
| name         | String!      |
| topics       | String       |

**changeScientistBiographyByName**

| Type      | Explanation                                                   |
|-----------|---------------------------------------------------------------|
| Scientist | This mutation change biography of a scientist object by name  |

| Property      | PropertyType |
|---------------|--------------|
| name          | String!      |
| biography     | String       |

**deleteScientistByName**

| Type      | Explanation                                      |
|-----------|--------------------------------------------------|
| Scientist | This mutation delete a scientist object by name  |

| Property         | PropertyType |
|------------------|--------------|
| name             | String!      |

**createPhilosopher**

| Type        | Explanation                                      |
|-------------|--------------------------------------------------|
| Philosopher | This mutation create a new philosopher object    |

| Property         | PropertyType |
|------------------|--------------|
| name             | String!      |
| livedIn          | String       |
| biographicalData | String       |
| topics           | String       |
| biography        | String       |
| works            | String       |

**changePhilosopher**

| Type        | Explanation                                                        |
|-------------|--------------------------------------------------------------------|
| Philosopher | This mutation change a philosopher object by name excluding name   |

| Property         | PropertyType |
|------------------|--------------|
| name             | String!      |
| livedIn          | String       |
| biographicalData | String       |
| topics           | String       |
| biography        | String       |
| works            | String       |

**deletePhilosopher**

| Type        | Explanation                                      |
|-------------|--------------------------------------------------|
| Philosopher | This mutation delete a scientist object by name  |

| Property         | PropertyType |
|------------------|--------------|
| name             | String!      |

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