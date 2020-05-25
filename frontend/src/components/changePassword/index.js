import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CHANGE_CREDS } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import PasswordInput from "../Elements/Password";
import {SubButton, InputButton} from "../Elements/Buttons";

function ChangePassword() {
    const history = useHistory();

    const [password, setPassword ] = useState("");
    const [passwordb, setPasswordb ] = useState("");

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    function handleChangePasswordb(event) {
        setPasswordb(event.target.value)
    }

    function handleSubmit(event) {
        alert(
            "Passwort: " + password +
            "Passwort B: " + passwordb
        )
    }

    function handleQuitButton(event) {
        event.preventDefault();
        history.push("/Benutzerbereich")
    }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <PasswordInput
        name="password"
        value={password}
        onChange={(e) => handleChangePassword(e)}
      > Neues Passwort: </PasswordInput>
      <PasswordInput
        name="passwordb"
        value={passwordb}
        onChange={(e) => handleChangePasswordb(e)}
      > Passwort Bestätigen: </PasswordInput>
      <InputButton onClick={(e) => handleQuitButton(e)}/>
      <SubButton />
    </Form>
  );
}

export default ChangePassword;
