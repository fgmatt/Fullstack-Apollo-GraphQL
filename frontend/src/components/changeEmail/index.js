import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { CHANGE_CREDS } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import Email from "../Elements/Email";
import PasswordInput from "../Elements/Password";
import { SubButton, InputButton } from "../Elements/Buttons";

function ChangeEmail() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changeCreds, { loading, error, data }] = useMutation(CHANGE_CREDS, {
    variables: { _id: "5df0d851ae569805c8593f32", email: email },
  });

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
      <h2>Email-ändern</h2>
      <Email value={email} onChange={(e) => handleChangeEmail(e)}>Neue Email:</Email>
      <PasswordInput
        name="password"
        value={password}
        onChange={(e) => handleChangePassword(e)}
      >
        {" "}
        Passwort:
      </PasswordInput>
      <InputButton onClick={(e) => handleQuitButton(e)} />
      <SubButton />
    </Form>
  );
}

export default ChangeEmail;
