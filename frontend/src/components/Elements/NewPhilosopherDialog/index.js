import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { withStyles } from "@material-ui/core/styles";
import Form from "../Form";
import { CREATE_PHILOSOPHER } from "../../../graphQL/mutations";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { InputButton } from "../Buttons";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function NewPhilosopherDialogs() {
  const userIdSession = sessionStorage.getItem("userId");

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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleName(event) {
    setName(event.target.value);
  }

  function handleLivedIn(event) {
    setLivedIn(event.target.value);
  }

  function handleBiogracicalData(event) {
    setBiographicalData(event.target.value);
  }

  function handleTopics(event) {
    setTopics(event.target.value);
  }

  function handleBiography(event) {
    setBiography(event.target.value);
  }

  function handleWorks(event) {
    setWorks(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    createPhilosopher({
      variables: {
        userId: userIdSession,
        name,
        livedIn,
        biographicalData,
        topics,
        biography,
        works,
      },
    })
      .then(({ data }) => {
        handleClose();
        window.location.reload(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        +
      </Button> */}
      <InputButton onClick={handleClickOpen} value="+" />
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Neuer Philosoph
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => handleName(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="livedIn"
            label="Lebensorte"
            type="text"
            fullWidth
            variant="outlined"
            value={livedIn}
            onChange={(e) => handleLivedIn(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="biographicalData"
            label="Lebensdaten"
            type="text"
            fullWidth
            variant="outlined"
            value={biographicalData}
            onChange={(e) => handleBiogracicalData(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="topics"
            label="Themen"
            type="text"
            fullWidth
            variant="outlined"
            value={topics}
            onChange={(e) => handleTopics(e)}
          />
          <TextareaAutosize
            placeholder="Kurzbiografie"
            value={biography}
            onChange={(e) => handleBiography(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="works"
            label="Werke"
            type="text"
            fullWidth
            variant="outlined"
            value={works}
            onChange={(e) => handleWorks(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={(e) => handleSubmit(e)} color="primary">
            Erstelle Philosophen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
