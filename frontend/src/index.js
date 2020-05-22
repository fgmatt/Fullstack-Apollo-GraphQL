import React from "react";
import { render } from "react-dom";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import "./style.css";
import App from "./components/App";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:2850/graphql",
});

const client = new ApolloClient({
  cache,
  link,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

if (module.hot) module.hot.accept();
