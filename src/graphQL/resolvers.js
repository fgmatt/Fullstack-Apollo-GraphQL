const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return 'Hello world!'
        }
    }
};


module.exports = resolvers;