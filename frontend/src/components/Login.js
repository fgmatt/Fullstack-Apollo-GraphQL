import React from "react";
import Email from "./Email";
import Password from "./Password";
import Loginbutton from "./Loginbutton";
import { useMutation } from "@apollo/react-hooks";
import SIGNIN from "../graphQL/mutations";

const Login = () => {
  const [signin, { data }] = useMutation(SIGNIN);
  return (
    <form 
      onSubmit={e => {
        e.preventDefault();
        signin({ variables: { email: 'foo', password: 'foo'} });

    }}
  >
      <h2>Login</h2>
      <Email />
      <Password />
      <Loginbutton />
    </form>
  );
};

export default Login;
