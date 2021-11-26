import { Box } from "@mui/material";
import React from "react";
import DeleteCourse from "./DeleteCourse";
import EditInfoCourse from "./EditInfoCourse";

export default function Settings({ role, name, details, briefName, id }) {
  return (
    <Box sx={{ display: "block", alignItems: "center" }}>
      <EditInfoCourse
        name={name}
        details={details}
        briefName={briefName}
        id={id}
      />
      {role === "OWNER" && <DeleteCourse id={id} />}
    </Box>
  );
}
