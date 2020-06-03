import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { CHANGE_CREDS } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import PasswordInput from "../Elements/Password";
import { SubButton, InputButton } from "../Elements/Buttons";

function ChangePassword() {
  const history = useHistory();

  const [passwordv, setPasswordv] = useState("");
  const [password, setPassword] = useState("");
  const [passwordb, setPasswordb] = useState("");
  const [changeCreds, { loading, error, data }] = useMutation(CHANGE_CREDS, {
    variables: { _id: "5df0d851ae569805c8593f32", password: password },
  });

  function handleChangePasswordv(event) {
    setPasswordv(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleChangePasswordb(event) {
    setPasswordb(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password == passwordb) {
      return null;
    }
    changeCreds()
      .then(({ data }) => {
        history.push("/Benutzerbereich");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleQuitButton(event) {
    event.preventDefault();
    history.push("/Benutzerbereich");
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
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
      <InputButton onClick={(e) => handleQuitButton(e)} />
      <SubButton />
    </Form>
  );
}

export default ChangePassword;
