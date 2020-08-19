import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import ButtonInput from "../Inputs/ButtonInput";

const ConfirmDialog = ({ style, disabled, onMouseOver, onClick, open, onClose, onClickDisagree, onClickAgree }) => {
  return (
    <div>
      <ButtonInput
        className="scientistDeleteButton"
        style={style}
        type="button"
        value="Löschen"
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onMouseOver}
      />
      <Dialog open={open} onClose={onClose} >
        <DialogTitle>{"Delete Scientist"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to delete this scientist?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClickDisagree} color="primary">
                Abbrechen
            </Button>
            <Button onClick={onClickAgree} color="primary">
                Bestätgen
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
