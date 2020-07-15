import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import { SubButton, InputButton } from "../Elements/Buttons";
import Email from "../Elements/Email";
import PasswordInput from "../Elements/Password";
import BlockingMessage from "../Blocking";

function NewLogin() {
  const history = useHistory();

  let [isBlocking, setIsBlocking] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordb, setPasswordb] = useState("");
  const [signup, { loading, error, data }] = useMutation(SIGNUP);

  function handleChangeEmail(event) {
    setEmail(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleChangePasswordB(event) {
    setPasswordb(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    signup({ variables: { email: email, password: password } })
      .then(({ data }) => {
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleButtonClick(event) {
    event.preventDefault();
    setIsBlocking(false);
    history.push("/");
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <BlockingMessage when={isBlocking} />
      <h2>New Login</h2>
      {loading && <p></p>}
      {error && <p className="errorMessage">Email oder Passwort entspricht nicht den Anforderungen.</p>}
      <Email value={email} onChange={(e) => handleChangeEmail(e)}>
        E-Mail:
      </Email>
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
      <InputButton className="div_button" onClick={(e) => handleButtonClick(e)} />
      <SubButton className="subButton" value="Neuer Benutzer" />
    </Form>
  );
}

export default NewLogin;
