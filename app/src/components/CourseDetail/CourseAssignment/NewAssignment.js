import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton, TextField, Typography } from "@mui/material";
import React from "react";

function NewAssignment({
  handleCreateNewAssignment,
  newAssignmentTitle,
  setNewAssignmentTitle,
  newAssignmentGrade,
  setNewAssignmentGrade,
}) {
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
      <form onSubmit={handleCreateNewAssignment} style={{ display: "flex" }}>
        <div style={{ width: "90%", margin: "0 0 16px 16px" }}>
          <TextField
            variant="standard"
            label="Tên"
            name="title"
            value={newAssignmentTitle}
            fullWidth
            margin="normal"
            onChange={(e) => {
              setNewAssignmentTitle(e.target.value);
            }}
          />
          <TextField
            variant="standard"
            label="Điểm"
            type="number"
            size="medium"
            name="grade"
            fullWidth
            value={newAssignmentGrade}
            margin="normal"
            onChange={(e) => {
              setNewAssignmentGrade(e.target.value);
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
