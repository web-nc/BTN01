import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListAssignment from "./ListAssignment";
import NewAssignment from "./NewAssignment";

function Assignment() {
  const assignmentList = useSelector((state) => state.assignment.items);
  const dispatch = useDispatch();

  const [assignment, setAssignment] = useState(assignmentList);
  const [newAssignmentTitle, setNewAssignmentTitle] = useState("");
  const [newAssignmentGrade, setNewAssignmentGrade] = useState("");
  const [onEditModeIndex, setOnEditModeIndex] = useState(-1);
  const [tempAssignmentTitle, setTempAssignmentTitle] = useState("");
  const [tempAssignmentGrade, setTempAssignmentGrade] = useState("");

  const onDragEnd = async (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    const copiedItems = [...assignment];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setAssignment(copiedItems);
    // console.log(copiedItems);
    dispatch({
      type: "ASSIGNMENT_UPDATE",
      payload: copiedItems,
    });
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
    dispatch({
      type: "ASSIGNMENT_REMOVE",
      payload: newAssignment,
    });
  };

  const handleCreateNewAssignment = (e) => {
    e.preventDefault();
    if (!(newAssignmentTitle && newAssignmentGrade)) return;
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
    dispatch({
      type: "ASSIGNMENT_UPDATE",
      payload: newAssignmentList,
    });
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
        <ListAssignment
          onDragEnd={onDragEnd}
          assignment={assignment}
          onEditModeIndex={onEditModeIndex}
          tempAssignmentTitle={tempAssignmentTitle}
          setTempAssignmentTitle={setTempAssignmentTitle}
          tempAssignmentGrade={tempAssignmentGrade}
          setTempAssignmentGrade={setTempAssignmentGrade}
          handleSaveAssignment={handleSaveAssignment}
          handleEditAssignment={handleEditAssignment}
          handleDeleteAssignment={handleDeleteAssignment}
        />
        <NewAssignment
          handleCreateNewAssignment={handleCreateNewAssignment}
          newAssignmentTitle={newAssignmentTitle}
          setNewAssignmentTitle={setNewAssignmentTitle}
          newAssignmentGrade={newAssignmentGrade}
          setNewAssignmentGrade={setNewAssignmentGrade}
        />
      </div>
    </>
  );
}

export default Assignment;
