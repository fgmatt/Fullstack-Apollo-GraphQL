import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { CHANGE_EMAIL } from "../../graphQL/mutations";
import Form from "../Elements/Form";
import Email from "../Elements/Email";
import PasswordInput from "../Elements/Password";
import { SubButton, InputButton } from "../Elements/Buttons";
import BlockingMessage from "../Blocking";

function ChangeEmail() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push("/");
  }

  let [isBlocking, setIsBlocking] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changeEmail, { loading, error, data }] = useMutation(CHANGE_EMAIL, {
    variables: { _id: userIdSession, email: email, password: password },
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
    changeEmail()
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
    setIsBlocking(false);
    // history.push("/Benutzerbereich");
    history.push("/Benutzerdaten");
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <BlockingMessage when={isBlocking}/>
      <h2>Email-ändern</h2>
      {loading && <p></p>}
      {error && <p>Email oder Passwort inkorrekt.</p>}
      <Email value={email} onChange={(e) => handleChangeEmail(e)}>
        Neue Email:
      </Email>
      <PasswordInput
        name="password"
        value={password}
        onChange={(e) => handleChangePassword(e)}
      >
        {" "}
        Passwort:
      </PasswordInput>
      <InputButton onClick={(e) => handleQuitButton(e)} />
      <SubButton className="div_button subButtonButton"/>
    </Form>
  );
}

export default ChangeEmail;
