import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import Grid from "@mui/material/Grid";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import "./header.css";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const toolbarStyle = {
  minHeight: "20px",
};
export default function HeaderComp(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={props.open}
        enableColorOnDark
        className="appbar"
      >
        <Grid container spacing={3}>
          <Grid item xs={11}>
            <Toolbar style={toolbarStyle}>
              <IconButton
                aria-label="open drawer"
                onClick={props.handleDrawerOpen}
                edge="start"
                sx={{ mr: 1, ...(props.open && { display: "none" }) }}
              >
                <DashboardSharpIcon color="secondary" />
              </IconButton>
            </Toolbar>
          </Grid>
          <Grid item xs={1}>
            <IconButton style={{ margin: "2px" }}>
              <AccountCircleSharpIcon />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}