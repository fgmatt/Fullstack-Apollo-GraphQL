import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import SubButton from "../Elements/Buttons";
import Email from "../Elements/Email";
import PasswordInput from "../Elements/Password";

function NewLogin() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordb, setPasswordb] = useState("");
  const [signup, { data }] = useMutation(SIGNUP);

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleChangePasswordB(event) {
    setPasswordb(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    signup({ variables: { email: email, password: password }}).then(history.push("/"));
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <h2>Login</h2>
      <Email value={email} onChange={(e) => handleChangeEmail(e)} />
      <PasswordInput
        name="password"
        value={password}
        onChange={(e) => handleChangePassword(e)}
      >
        Passwort:
      </PasswordInput>
      <PasswordInput
        name="passwordb"
        value={passwordb}
        onChange={(e) => handleChangePasswordB(e)}
      >
        Passwort B:
      </PasswordInput>
      <button>
        <Link to="/">Abbrechen</Link>
      </button>
      <SubButton value="Neuer_Benutzer" />
    </Form>
  );
}

export default NewLogin;
