import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CHANGE_CREDS } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import Email from "../Elements/Email";
import PasswordInput from "../Elements/Password";
import { SubButton, InputButton } from "../Elements/Buttons";

function ChangeEmail() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   function handleChangeEmail(event) {
        setEmail(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(
            "E-Mail: " + email +
            "Password: " + password
        )
    }

    function handleQuitButton(event) {
        event.preventDefault();
        history.push("/Benutzerbereich")
    }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <h2>Email-ändern</h2>
      <Email value={email} onChange={(e) => handleChangeEmail(e)}></Email>
      <PasswordInput
        name="password"
        value={password}
        onChange={(e) => handleChangePassword(e)}
      > Passwort:</PasswordInput>
      <InputButton onClick={(e) => handleQuitButton(e)}/>
      <SubButton />
    </Form>
  );
}

export default ChangeEmail;
