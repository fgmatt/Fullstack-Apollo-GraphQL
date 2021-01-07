import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CHANGE_EMAIL } from "../../graphQL/mutations";
import { USERFINDBYID } from "../../graphQL/queries";
import Form from "../Elements/Form";
import Email from "../Elements/Email";
import PasswordInput from "../Elements/Password";
import { SubButton, InputButton } from "../Elements/Buttons";
import Footer from "../Elements/Footer";
import BlockingMessage from "../Blocking";
import { rHome, rUserData, rUserSpace } from "../RoutesName";

function ChangeEmail() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");
  const userIdToken = sessionStorage.getItem("token");

  const userfindById = useQuery(USERFINDBYID, {
    variables: { _id: userIdSession, token: userIdToken },
  });

  if (userfindById.error) {
    history.push(rHome);
  }

  let [isBlocking, setIsBlocking] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changeEmail, { loading, error, data }] = useMutation(CHANGE_EMAIL, {
    variables: { _id: userIdSession, email, password },
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
    changeEmail()
      .then(({ data }) => {
        // history.push(rUserSpace);
        history.push(rUserData);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function handleQuitButton(event) {
    event.preventDefault();
    // history.push(rUserSpace);
    history.push(rUserData);
  }

  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <BlockingMessage when={isBlocking} />
        <h2>Email-ändern</h2>
        {loading && <p></p>}
        {error && (
          <p className="errorMessage">Email oder Passwort inkorrekt.</p>
        )}
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
        <div className="buttonBar">
          <InputButton onClick={(e) => handleQuitButton(e)} />
          <SubButton className="div_button" />
        </div>
      </Form>
      <Footer />
    </div>
  );
}

export default ChangeEmail;
