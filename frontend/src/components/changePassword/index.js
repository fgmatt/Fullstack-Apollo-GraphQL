import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { CHANGE_PASSWORD } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import PasswordInput from "../Elements/Password";
import { SubButton, InputButton } from "../Elements/Buttons";
import BlockingMessage from "../Blocking";

function ChangePassword() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push("/");
  }

  let [isBlocking, setIsBlocking] = useState(false);
  const [passwordv, setPasswordv] = useState("");
  const [password, setPassword] = useState("");
  const [passwordb, setPasswordb] = useState("");
  const [ChangePassword, { loading, error, data }] = useMutation(
    CHANGE_PASSWORD,
    {
      variables: {
        _id: userIdSession,
        password: passwordv,
        newPassword: password,
      },
    }
  );

  function handleChangePasswordv(event) {
    setPasswordv(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleChangePasswordb(event) {
    setPasswordb(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsBlocking(false);
    if (password != passwordb) {
      return null;
    }
    ChangePassword()
      .then(({ data }) => {
        // history.push("/Benutzerbereich");
        history.push("/Benutzerdaten");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleQuitButton(event) {
    event.preventDefault();
    // history.push("/Benutzerbereich");
    history.push("/Benutzerdaten");
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <BlockingMessage when={isBlocking} />
      <h2>Passwort ändern:</h2>
      {loading && <p></p>}
      {error && <p className="errorMessage">Passwort inkorrekt.</p>}
      <PasswordInput
        name="passwordv"
        value={passwordv}
        onChange={(e) => handleChangePasswordv(e)}
      >
        Altes Passwort:
      </PasswordInput>
      <PasswordInput
        name="password"
        value={password}
        onChange={(e) => handleChangePassword(e)}
      >
        {" "}
        Neues Passwort:{" "}
      </PasswordInput>
      <PasswordInput
        name="passwordb"
        value={passwordb}
        onChange={(e) => handleChangePasswordb(e)}
      >
        {" "}
        Passwort Bestätigen:{" "}
      </PasswordInput>
      <InputButton className="div_button" onClick={(e) => handleQuitButton(e)} />
      <SubButton className="subButton"/>
    </Form>
  );
}

export default ChangePassword;
