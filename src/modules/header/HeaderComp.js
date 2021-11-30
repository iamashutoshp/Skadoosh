import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import "./header.css";
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';

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

export default function HeaderComp(props) {
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" open={props.open} enableColorOnDark className="appbar">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            sx={{ mr: 1, ...(props.open && { display: "none" }) }}
          >
            <DashboardSharpIcon color="secondary"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
