import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { IconButton, TextField } from "@mui/material";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function ListAssignment({
  onDragEnd,
  assignment,
  onEditModeIndex,
  tempAssignmentTitle,
  setTempAssignmentTitle,
  tempAssignmentGrade,
  setTempAssignmentGrade,
  handleSaveAssignment,
  handleEditAssignment,
  handleDeleteAssignment,
}) {
  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <Droppable droppableId="assignment">
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? "lightblue" : "lightgray",
                padding: "4px 4px 0 4px",
                width: "50%",
              }}
            >
              {assignment.map((item, index) => {
                return (
                  <Draggable key={item._id} draggableId={item._id} index={index} >
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
                                  ? item.name
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
                                  ? item.weight
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
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}

export default ListAssignment;
