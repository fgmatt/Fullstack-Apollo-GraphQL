import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import { SubButton, InputButton } from "../Elements/Buttons";
import Email from "../Elements/Email";
import PasswordInput from "../Elements/Password";
import BlockingMessage from "../Blocking";
import { rHome } from "../RoutesName";

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
    setIsBlocking(false);
    signup({ variables: { email, password } })
      .then(({ data }) => {
        history.push(rHome);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleButtonClick(event) {
    event.preventDefault();
    history.push(rHome);
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
      <div className="buttonBar">
      <InputButton onClick={(e) => handleButtonClick(e)} />
      <SubButton className="subButton" value="Neuer Benutzer" />
      </div>
    </Form>
  );
}

export default NewLogin;
