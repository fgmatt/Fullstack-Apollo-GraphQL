import React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";

import "./style.css";
import client from "./ApolloClient";
import App from "./components/App";

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

if (module.hot) module.hot.accept();
