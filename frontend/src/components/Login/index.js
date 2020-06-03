import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { SIGNIN } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import { SubButton } from "../Elements/Buttons";
import Email from "../Elements/Email";
import PasswordInput from "../Elements/Password";

function Login() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signin, { loading, error, data }] = useMutation(SIGNIN, {
    variables: { email: email, password: password },
  });

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    signin()
      .then(({ data }) => {
        history.push("/Benutzerbereich");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <h2>Login</h2>
      {loading && <p></p>}
      {error && <p>Email oder Passwort inkorrekt.</p>}
      <Email value={email} onChange={(e) => handleChangeEmail(e)}>
        E-Mail:
      </Email>
      <PasswordInput
        name="Password"
        value={password}
        onChange={(e) => handleChangePassword(e)}
      >
        Passwort:
      </PasswordInput>
      <p>
        <Link to="/NeuerBenutzer">Neuer Benutzer</Link>
      </p>
      <SubButton value="Login" />
    </Form>
  );
}

export default Login;
