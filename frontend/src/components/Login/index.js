import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { SIGNIN } from "../../graphQL/mutations";
import client from "../../ApolloClient/";
import Form from "../Elements/Form";
import { SubButton } from "../Elements/Buttons";
import Email from "../Elements/Email";
import PasswordInput from "../Elements/Password";
import BlockingMessage from "../Blocking";

function Login() {
  const history = useHistory();

  const preSession = sessionStorage.getItem("userId");

  let [isBlocking, setIsBlocking] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signin, { loading, error, data }] = useMutation(SIGNIN, {
    variables: { email, password },
  });

  function handleChangeEmail(event) {
    setEmail(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsBlocking(false);
    signin()
      .then(({ data }) => {
        sessionStorage.setItem("userId", data.signin._id);
        // history.push("/Benutzerbereich");
        history.push("/Hauptbereich");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <BlockingMessage when={isBlocking} />
      <h2>Login</h2>
      {loading && <p></p>}
      {error && <p className="errorMessage">Email oder Passwort inkorrekt.</p>}
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
      <p className="newLogLink">
        <Link to="/NeuerBenutzer">Neuer Benutzer</Link>
      </p>
      <SubButton className="subButton" value="Login" />
    </Form>
  );
}

export default Login;
