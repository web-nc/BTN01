import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const assignmentList = [
  //draggableId must be string
  { id: "1", title: "First task", grade: 2 },
  { id: "2", title: "Second task", grade: 4 },
  { id: "3", title: "Third task", grade: 5 },
];

function InfoGrade() {
  return (
    <Card sx={{ marginTop: 2 }}>
      <Box sx={{ width: "90%", mx: "auto" }}>
        <Typography variant="h5" color="primary">
          Cấu trúc điểm
        </Typography>
        {assignmentList.map((item) => {
          return (
            <Typography variant="h6" color="black">
              {item.title}: {item.grade}
            </Typography>
          );
        })}
      </Box>
    </Card>
  );
}

export default InfoGrade;
