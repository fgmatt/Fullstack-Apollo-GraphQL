import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import Dialog from "@material-ui/core/Dialog";
import Form from "../Form";
import { SubButton, InputButton } from "../Buttons";
import BlockingMessage from "../../Blocking";
import { CREATE_PHILOSOPHER } from "../../../graphQL/mutations";
import {
  PNameInput,
  LivedInInput,
  BiographicalDataInput,
  TopicsInput,
  BiographyInput,
  WorksInput,
} from "../Inputs";
import TextareaBiography from "../Textarea";

export default function AltNewPhilosopher() {
  let [isBlocking, setIsBlocking] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [livedIn, setLivedIn] = useState("");
  const [biographicalData, setBiographicalData] = useState("");
  const [topics, setTopics] = useState("");
  const [biography, setBiography] = useState("");
  const [works, setWorks] = useState("");
  const [createPhilosopher, { loading, error, data }] = useMutation(
    CREATE_PHILOSOPHER
  );

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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

  function handleWorks(event) {
    setWorks(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsBlocking(false);
    createPhilosopher({
      variables: { name, livedIn, biographicalData, topics, biography, works },
    })
      .then(({ data }) => {
        window.location.reload(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <InputButton onClick={handleClickOpen} value="+" />
      <Dialog open={open} onClose={handleClose}>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <BlockingMessage when={isBlocking} />
          <h2>Neuer Philosoph</h2>
          <PNameInput
            value={name}
            onChange={(e) => {
              handleName(e);
            }}
          />
          <LivedInInput
            value={livedIn}
            onChange={(e) => {
              handleLivedIn(e);
            }}
          />
          <BiographicalDataInput
            value={biographicalData}
            onChange={(e) => {
              handleBiogracicalData(e);
            }}
          />
          <TopicsInput
            value={topics}
            onChange={(e) => {
              handleTopics(e);
            }}
          />
          {/* <BiographyInput
        value={biography}
        onChange={(e) => {
          handleBiography(e);
        }}
      /> */}
          <TextareaBiography
            value={biography}
            onChange={(e) => {
              handleBiography(e);
            }}
          />
          <WorksInput
            value={works}
            onChange={(e) => {
              handleWorks(e);
            }}
          />
          <div className="buttonBar">
            <InputButton onClick={handleClose} />
            <SubButton onClick={handleClose} value="Erstelle Philosophen" />
          </div>
        </Form>
      </Dialog>
    </div>
  );
}
