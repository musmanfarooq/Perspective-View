import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Toolbar sx={{ padding: "12px" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Perspective View
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
