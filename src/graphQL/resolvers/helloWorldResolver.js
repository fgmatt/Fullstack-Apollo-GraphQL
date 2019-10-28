// const resolvers = {
//     Query: {
//         hello: () => 'Hello World!'
//     }
// }

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return 'Hello world!'
        }
    }
};


module.exports = resolvers;