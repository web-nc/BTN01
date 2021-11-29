import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

function AssignmentCard({
  item,
  index,
  handleSaveAssignment,
  handleDeleteAssignment,
}) {
  const [onEditMode, setOnEditMode] = useState(true);
  const [name, setName] = useState(item.name);
  const [weight, setWeight] = useState(item.weight);

  const handleSave = () => {
    setOnEditMode(true);
    handleSaveAssignment(index, name, weight);
  };

  const handleOpenEdit = () => {
    setOnEditMode(false);
  };

  return (
    <Draggable key={item._id} draggableId={item._id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              display: "flex",
              userSelect: "none",
              padding: "16px 0 16px 16px",
              marginBottom: "6px",
              minHeight: "50px",
              backgroundColor: snapshot.isDragging ? "#bdc3c7" : "white",
              color: "white",
              ...provided.draggableProps.style,
            }}
          >
            <div style={{ width: "90%" }}>
              <TextField
                disabled={onEditMode}
                variant="standard"
                label="Tên"
                value={name}
                fullWidth
                margin="normal"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                disabled={onEditMode}
                variant="standard"
                label="Điểm"
                type="number"
                size="medium"
                fullWidth
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                margin="normal"
              />
            </div>
            <div
              style={{
                maxWidth: "70px",
                width: "10%",
                textAlign: "center",
                display: "block",
                verticalAlign: "middle",
                marginLeft: 10,
                marginRight: 5,
              }}
            >
              {onEditMode ? (
                <IconButton
                  onClick={handleOpenEdit}
                  sx={{ height: "50%", width: "100%" }}
                >
                  <EditIcon />
                </IconButton>
              ) : (
                <IconButton
                  onClick={handleSave}
                  sx={{
                    height: "50%",
                    width: "100%",
                    color: "#3498db",
                  }}
                >
                  <SaveIcon />
                </IconButton>
              )}

              <IconButton
                onClick={() => {
                  handleDeleteAssignment(index);
                }}
                sx={{
                  height: "50%",
                  width: "100%",
                  color: "#e74c3c",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}

export default AssignmentCard;
