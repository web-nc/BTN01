import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const assignmentList = [
  //draggableId must be string
  { id: "1", title: "First task", grade: 2 },
  { id: "2", title: "Second task", grade: 4 },
  { id: "3", title: "Third task", grade: 5 },
];

function Assignment() {
  const [assignment, setAssignment] = useState(assignmentList);
  const [newAssignmentTitle, setNewAssignmentTitle] = useState("");
  const [newAssignmentGrade, setNewAssignmentGrade] = useState("");
  const [onEditModeIndex, setOnEditModeIndex] = useState(-1);
  const [tempAssignmentTitle, setTempAssignmentTitle] = useState("");
  const [tempAssignmentGrade, setTempAssignmentGrade] = useState("");

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    const copiedItems = [...assignment];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setAssignment(copiedItems);
    console.log(assignment);
  };

  const handleEditAssignment = (index) => {
    setOnEditModeIndex(index);
    setTempAssignmentTitle(assignment[index].title);
    setTempAssignmentGrade(assignment[index].grade);
  };

  const handleSaveAssignment = (index) => {
    setOnEditModeIndex(-1);
    const currentAssignment = { ...assignment[index] };
    currentAssignment.title = tempAssignmentTitle;
    currentAssignment.grade = tempAssignmentGrade;

    const list1 = assignment.slice(0, index);
    const list2 = assignment.slice(index + 1);
    const newAssignment = list1.concat(currentAssignment).concat(list2);
    setAssignment(newAssignment);
  };

  const handleDeleteAssignment = (index) => {
    const list1 = assignment.slice(0, index);
    const list2 = assignment.slice(index + 1);
    const newAssignment = list1.concat(list2);
    setAssignment(newAssignment);
  };

  const handleCreateNewAssignment = (e) => {
    e.preventDefault();
    console.log(e);
    const newId = (assignment.length + 1).toString();
    const newAssignment = {
      id: newId,
      title: newAssignmentTitle,
      grade: newAssignmentGrade,
    };
    const newAssignmentList = [...assignment];
    newAssignmentList.push(newAssignment);
    setAssignment(newAssignmentList);
    setNewAssignmentGrade("");
    setNewAssignmentTitle("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          marginTop: 30,
        }}
      >
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
          <Droppable droppableId="assignment">
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver
                      ? "lightblue"
                      : "lightgray",
                    padding: "4px 4px 0 4px",
                    width: "50%",
                  }}
                >
                  {assignment.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {/* draggbleId must be string */}
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
                                backgroundColor: snapshot.isDragging
                                  ? "#bdc3c7"
                                  : "white",
                                color: "white",
                                ...provided.draggableProps.style,
                              }}
                            >
                              <div style={{ width: "90%" }}>
                                <TextField
                                  disabled={onEditModeIndex !== index}
                                  variant="standard"
                                  label="Tên"
                                  value={
                                    onEditModeIndex !== index
                                      ? item.title
                                      : tempAssignmentTitle
                                  }
                                  fullWidth
                                  margin="normal"
                                  onChange={(e) => {
                                    setTempAssignmentTitle(e.target.value);
                                  }}
                                />
                                <TextField
                                  disabled={onEditModeIndex !== index}
                                  variant="standard"
                                  label="Điểm"
                                  type="number"
                                  size="medium"
                                  fullWidth
                                  value={
                                    onEditModeIndex !== index
                                      ? item.grade
                                      : tempAssignmentGrade
                                  }
                                  onChange={(e) => {
                                    setTempAssignmentGrade(e.target.value);
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
                                {onEditModeIndex === index ? (
                                  <IconButton
                                    onClick={() => {
                                      handleSaveAssignment(index);
                                    }}
                                    sx={{
                                      height: "50%",
                                      width: "100%",
                                      color: "#3498db",
                                    }}
                                  >
                                    <SaveIcon />
                                  </IconButton>
                                ) : (
                                  <IconButton
                                    onClick={() => {
                                      handleEditAssignment(index);
                                    }}
                                    sx={{ height: "50%", width: "100%" }}
                                  >
                                    <EditIcon />
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
                  })}
                  {/* placeholder hold space of column if move the item */}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </DragDropContext>

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
          <form
            onSubmit={handleCreateNewAssignment}
            style={{ display: "flex" }}
          >
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
      </div>
    </>
  );
}

export default Assignment;
