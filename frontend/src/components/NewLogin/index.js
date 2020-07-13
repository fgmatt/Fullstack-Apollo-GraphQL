import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import { SubButton, InputButton } from "../Elements/Buttons";
import Email from "../Elements/Email";
import PasswordInput from "../Elements/Password";
import BlockingMessage from "../Blocking";
import "./style.css";

function NewLogin() {
  const history = useHistory();

  let [isBlocking, setIsBlocking] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordb, setPasswordb] = useState("");
  const [signup, { data }] = useMutation(SIGNUP);

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
      <h2>Login</h2>
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
      <InputButton onClick={(e) => handleButtonClick(e)} />
      <SubButton className="newUserButton" value="Neuer_Benutzer" />
    </Form>
  );
}

export default NewLogin;
