import React, { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createCourse } from "../../../services/course";
import { useDispatch } from "react-redux";

export default function FormDialog({ openDialog, handleDialogClose }) {
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleClose = () => {
    handleDialogClose();
    formRef.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form["name"].value) {
      //message
      return;
    }

    createCourse(form["name"].value, form["details"].value, form["briefName"].value).then((res) => {
      dispatch({ type: "COURSES_INCREMENT", payload: res.data.payload });
    });
    handleDialogClose();
    formRef.current.reset();
  };

  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <form ref={formRef} action="/" method="POST" onSubmit={handleSubmit}>
        <DialogTitle>Create class</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên lớp (không bỏ trống)"
            type="text"
            fullWidth
            variant="standard"
            name="name"
          />
          <TextField
            margin="dense"
            id="briefName"
            label="Chủ đề"
            type="text"
            fullWidth
            variant="standard"
            name="briefName"
          />
          <TextField margin="dense" id="details" label="Chi tiết" type="text" fullWidth variant="standard" name="details" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ bỏ</Button>
          <Button type="submit" onClick={handleSubmit}>
            Tạo
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
