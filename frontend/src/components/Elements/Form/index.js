import React from "react";
//import { useMutation } from "@apollo/react-hooks";
import { Mutation } from "react-apollo";
import { SIGNIN } from "../../../graphQL/mutations";
import { SIGNUP } from "../../../graphQL/mutations";

const Form = ({ children, onSubmit, email, password, mutation }) => {
  if (mutation === "SIGNIN") {
    return (
      <Mutation mutation={SIGNIN} variables={{ email, password }}>
        {(signin, { data, loading, error }) => (
          <form onSubmit={onSubmit}>{children}</form>
        )}
      </Mutation>
    );
  } else {
    return (
      <Mutation mutation={SIGNUP} variables={{ email, password }}>
        {(signin, { data, loading, error }) => (
          <form onSubmit={onSubmit}>{children}</form>
        )}
      </Mutation>
    );
  }
};

export default Form;
