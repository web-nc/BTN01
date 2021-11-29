import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function NewAssignment({ handleCreateNewAssignment }) {
  const [newAssignmentName, setNewAssignmentName] = useState("");
  const [newAssignmentWeight, setNewAssignmentWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateNewAssignment(newAssignmentName, newAssignmentWeight);
    setNewAssignmentName("");
    setNewAssignmentWeight("");
  };

  return (
    <div
      style={{
        width: "50%",
        marginBottom: "6px",
        border: "4px solid lightgray",
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ margin: "16px 16px 0 16px" }}
      >
        Bài tập mới
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <div style={{ width: "90%", margin: "0 0 16px 16px" }}>
          <TextField
            variant="standard"
            label="Tên"
            name="title"
            value={newAssignmentName}
            fullWidth
            margin="normal"
            onChange={(e) => {
              setNewAssignmentName(e.target.value);
            }}
          />
          <TextField
            variant="standard"
            label="Điểm"
            type="number"
            size="medium"
            name="grade"
            fullWidth
            value={newAssignmentWeight}
            margin="normal"
            onChange={(e) => {
              setNewAssignmentWeight(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            maxWidth: "70px",
            width: "10%",
            textAlign: "center",
            display: "block",
            marginLeft: 10,
            marginRight: 5,
          }}
        >
          <IconButton
            type="submit"
            sx={{
              height: "50%",
              width: "100%",
              marginTop: 2,
              color: "#3498db",
            }}
          >
            <AddBoxIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
}

export default NewAssignment;
