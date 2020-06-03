import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
//import { onError } from "apollo-link-error";

const cache = new InMemoryCache();
const httpLink =  createHttpLink({
  uri: "http://localhost:2850/graphql",
});
// const errorLink = onError(({ networkError }) => {
//     if (networkError.statusCode === 500) {
//         console.log("error");
//     }
// })

//const link = errorLink.concat(httpLink);

const client = new ApolloClient({
  cache,
  link: httpLink,
});

export default client;