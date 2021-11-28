import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

function InfoGrade() {
  const assignmentList = useSelector((state) => state.assignment.items);
  return (
    <Card sx={{ marginTop: 2 }}>
      <Box sx={{ width: "90%", mx: "auto" }}>
        <Typography variant="h5" color="primary">
          Cấu trúc điểm
        </Typography>
        {assignmentList.map((item, index) => {
          return (
            <Typography key={index} variant="h6" color="black">
              {item.title}: {item.grade}
            </Typography>
          );
        })}
      </Box>
    </Card>
  );
}

export default InfoGrade;
