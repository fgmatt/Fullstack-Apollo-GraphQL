import React from "react";
//import { render } from "react-dom";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
//import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloProvider } from "react-apollo";

import "./style.css";
import App from "./components/App";

const client = new ApolloClient({
  uri: "http://localhost:2850",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

if (module.hot) module.hot.accept();
