import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route } from "react-router-dom";

export default ({ component, ...args }) => (
  <Route
    render={(props) => {
      let Component = withAuthenticationRequired(component, {});
      return <Component {...props} />;
    }}
    {...args}
  />
);
