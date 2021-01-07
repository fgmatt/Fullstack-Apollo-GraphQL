import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { rHome, rMiscelleanous } from "../RoutesName";
import { USERFINDBYID } from "../../graphQL/queries";
import Footer from "../Elements/Footer";

function DialogScore({ count }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Ok
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="score-dialog-title"
      >
        <DialogTitle id="score-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText>Your Score is {count}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DialogMemoryGame({ setDigits, digits }) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(2);
  const [chunks, setChunks] = useState("");
  const [mismatch, setMismatch] = useState(false);

  function handleStartButton() {
    setCount(count + 1);
    let prevDigits = "";

    for (let i = 0; i <= count; i++) {
      let aktDigit = Math.floor(10 * Math.random()).toString();
      prevDigits = prevDigits + aktDigit;
    }
    setDigits(prevDigits);
  }

  const handleClickOpen = () => {
    handleStartButton();
    setOpen(true);
  };

  const handleOnChange = (event) => {
    setChunks(event.target.value);
    if (digits === chunks) {
      console.log(1);
    } else {
      setMismatch(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseCanceled = () => {
    setCount(2);
    handleClose();
  };

  const handleCloseOk = () => {
    handleClose();
    // if (digits === chunks) {
    //   console.log(1);
    // } else {
    //   setMismatch(true);
    // }
    setChunks("");
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Start
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-memoryGame-title"
      >
        <DialogTitle id="dialog-memoryGame-title">Eingabefenster</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bitte gebe die Ziffernfolge ein.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={chunks}
            onChange={(e) => handleOnChange(e)}
            label=""
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCanceled} color="primary">
            Abbrechen
          </Button>
          {/* <Button onClick={handleCloseOk} color="primary">
            Ok
          </Button> */}
          <DialogScore count={count} />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default function MemoryGame() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");
  const userIdToken = sessionStorage.getItem("token");

  const userfindById = useQuery(USERFINDBYID, {
    variables: { _id: userIdSession, token: userIdToken },
  });

  if (userfindById.error) {
    history.push(rHome);
  }

  const [digits, setDigits] = useState("");

  function handleLink() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
  }

  return (
    <div>
      <div className="headerMiscellaneous">
        <div>
          <h1>Gedächtnisspiel</h1>
        </div>
        <div>
          <p className="logout">
            <Link onClick={handleLink} to={rHome}>
              Logout
            </Link>
          </p>
        </div>
        <div>
          {digits && <h1 id="memNumber">{digits}</h1>}

          <DialogMemoryGame setDigits={setDigits} digits={digits} />
        </div>
      </div>
      <div>
        <p className="back">
          <Link to={rMiscelleanous}>Zurück</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
