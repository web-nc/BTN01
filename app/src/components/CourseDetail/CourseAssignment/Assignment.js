import React from "react";
import ListAssignment from "./ListAssignment";
import NewAssignment from "./NewAssignment";

function Assignment({ assignments, handleAssignmentsChange }) {
  console.log(assignments);

  const onDragEnd = async (result) => {
    console.log(result);
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.index === destination.index) return;

    const copiedItems = [...assignments];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    handleAssignmentsChange(copiedItems);

    // const firstIndex =
    //   source.index < destination.index
    //     ? source.index + 1
    //     : destination.index + 1;
    // const secondIndex =
    //   source.index < destination.index
    //     ? destination.index + 1
    //     : source.index + 1;
    // console.log(firstIndex, secondIndex);
    // updateAssignmentsOrder
  };

  const handleSaveAssignment = (index, name, weight) => {
    const currentAssignment = { ...assignments[index] };
    currentAssignment.name = name;
    currentAssignment.weight = weight;

    const list1 = assignments.slice(0, index);
    const list2 = assignments.slice(index + 1);
    const newAssignment = list1.concat(currentAssignment).concat(list2);
    handleAssignmentsChange(newAssignment);
    // updateAssignment
  };

  const handleDeleteAssignment = (index) => {
    const list1 = assignments.slice(0, index);
    const list2 = assignments.slice(index + 1);
    const newAssignment = list1.concat(list2);
    handleAssignmentsChange(newAssignment);
    // deleteAssignment
  };

  const handleCreateNewAssignment = (name, weight) => {
    if (!(name && weight)) return;
    const newId = (assignments.length + 1).toString();
    const newAssignment = {
      _id: newId,
      name: name,
      weight: weight,
    };
    const newAssignmentList = [...assignments];
    newAssignmentList.push(newAssignment);
    handleAssignmentsChange(newAssignmentList);
    // createAssignment
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
          assignment={assignments}
          handleSaveAssignment={handleSaveAssignment}
          handleDeleteAssignment={handleDeleteAssignment}
        />
        <NewAssignment handleCreateNewAssignment={handleCreateNewAssignment} />
      </div>
    </>
  );
}

export default Assignment;
