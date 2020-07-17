import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import Form from "../Elements/Form";
import { SubButton, InputButton } from "../Elements/Buttons";
import TextInput from "../Elements/Inputs/TextInput";
import BlockingMessage from "../Blocking";
import { CREATE_SCIENTIST } from "../../graphQL/mutations";
import { rHome, rScientists } from "../RoutesName";

const NewScientist = () => {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push(rHome);
  }

  let [isBlocking, setIsBlocking] = useState(false);
  const [name, setName] = useState("");
  const [livedIn, setLivedIn] = useState("");
  const [biographicalData, setBiographicalData] = useState("");
  const [topics, setTopics] = useState("");
  const [biography, setBiography] = useState("");
  const [createScientist, { loading, error, data }] = useMutation(
    CREATE_SCIENTIST
  );

  function handleName(event) {
    setName(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleLivedIn(event) {
    setLivedIn(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleBiogracicalData(event) {
    setBiographicalData(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleTopics(event) {
    setTopics(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleBiography(event) {
    setBiography(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleButtonClick(event) {
    event.preventDefault();
    history.push(rScientists);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsBlocking(false);
    createScientist({
      variables: { name, livedIn, biographicalData, topics, biography },
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
      <h2>Neuer Wissenschaftler</h2>
      <TextInput
        name="name"
        value={name}
        onChange={(e) => {
          handleName(e);
        }}
      >
        Name:
      </TextInput>
      <TextInput
        name="livedIn"
        value={livedIn}
        onChange={(e) => {
          handleLivedIn(e);
        }}
      >
        Wohnorte:
      </TextInput>
      <TextInput
        name="biographicalData"
        value={biographicalData}
        onChange={(e) => {
          handleBiogracicalData(e);
        }}
      >
        Lebensdaten:
      </TextInput>
      <TextInput
        name="topics"
        value={topics}
        onChange={(e) => {
          handleTopics(e);
        }}
      >
        Gebiete:
      </TextInput>
      <TextInput
        name="biography"
        value={biography}
        onChange={(e) => {
          handleBiography(e);
        }}
      >
        Biographie:
      </TextInput>
      <InputButton
        className="div_button"
        onClick={(e) => handleButtonClick(e)}
      />
      <SubButton className="subButton" value="Erstelle Wissenschaftler" />
    </Form>
  );
};

export default NewScientist;
