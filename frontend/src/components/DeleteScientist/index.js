import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import Form from "../Elements/Form";
import { SubButton, InputButton } from "../Elements/Buttons";
import BlockingMessage from "../Blocking";
import { DELETE_SCIENTIST_BY_NAME } from "../../graphQL/mutations";
import { rHome, rScientists } from "../RoutesName";
import { PNameInput } from "../Elements/Inputs";

const DeleteScientist = () => {
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
  const [name, setName] = useState("");
  const [deleteScientistByName, { loading, error, data }] = useMutation(
    DELETE_SCIENTIST_BY_NAME
  );

  function handleName(event) {
    setName(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleButtonClick(event) {
    event.preventDefault();
    history.push(rScientists);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsBlocking(false);
    deleteScientistByName({
      variables: { userId: userIdSession, name },
    })
      .then(({ data }) => {
        history.push(rScientists);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <BlockingMessage when={isBlocking} />
      <h2>Lösche Wissenschaftler</h2>
      <PNameInput
        value={name}
        onChange={(e) => {
          handleName(e);
        }}
      />

      <InputButton
        className="div_button"
        onClick={(e) => handleButtonClick(e)}
      />
      <SubButton className="subButton" value="Lösche Wissenschaftler" />
    </Form>
  );
};

export default DeleteScientist;
