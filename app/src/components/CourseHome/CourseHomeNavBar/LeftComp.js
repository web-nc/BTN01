import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function LeftComp() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
     
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignSelf: "center" }}>
        Lớp học
      </Typography>
    </Box>
  );
}
