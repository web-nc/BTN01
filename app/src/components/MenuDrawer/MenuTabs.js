import React from "react";
import { Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";

const iconMapping = {
  OWNER: <SchoolIcon />,
  TEACHER: <WorkIcon />,
  STUDENT: <SupervisedUserCircleIcon />,
};

export default function MenuTabs({ courses, role }) {
  const navigator = useNavigate();

  return courses.some((course) => course.role === role) ? (
    <React.Fragment>
      <List>
        {courses.map(
          (course) =>
            course.role === role && (
              <ListItem button key={course._id} onClick={() => navigator(`/course/${course._id}/info`)}>
                <ListItemIcon>{iconMapping[role]}</ListItemIcon>
                <ListItemText primary={<Typography noWrap={true} children={course.name} />} />
              </ListItem>
            )
        )}
      </List>
      <Divider />
    </React.Fragment>
  ) : (
    <div />
  );
}
