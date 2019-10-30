// const { makeExecutableSchema, addMockFunctionsToSchema, mockServer } = require('apollo-server-express')
//   const testCaseA = {
//     id: 'Test case A',
//     query: `
//       query {
//         hello 
//       }
//     `,
//     variables: { },
//     context: { },
//     expected: { data: { hello: 'Hello World!'} }
//   };
  
//   describe('Schema', () => {
//     // Array of case types
//     const cases = [testCaseA];
    
//     const mockSchema = makeExecutableSchema({ typeDefs });
  
//     // Here we specify the return payloads of mocked types
//     addMockFunctionsToSchema({
//       schema: mockSchema,
//       mocks: {
//         String: () => 'Hello World!',
//       }
//     });
  
//     test('has valid type definitions', async () => {
//       expect(async () => {
//         const MockServer = mockServer(typeDefs);
  
//         await MockServer.query(`{ __schema { types { name } } }`);
//       }).not.toThrow();
//     });
  
//     cases.forEach(obj => {
//       const { id, query, variables, context: ctx, expected } = obj;
  
//       test(`query: ${id}`, async () => {
//         return await expect(
//           graphql(mockSchema, query, null, { ctx }, variables)
//         ).resolves.toEqual(expected);
//       });
//     });
  
//   });