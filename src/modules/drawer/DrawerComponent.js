import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";
import TextSnippetSharpIcon from "@mui/icons-material/TextSnippetSharp";
import PeopleIcon from "@mui/icons-material/People";
import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";
import CottageIcon from "@mui/icons-material/Cottage";
import { makeStyles } from "@mui/styles";
import './drawerComp.css'
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));


export default function DrawerComponent() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickAway=()=>{
    if(open)
      setOpen(false);
  };

  const bool=true;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} enableColorOnDark onClick={handleClickAway}
        className="appbar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 1, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <List
            sx={{
              mx: "auto",
              // bgcolor: "primary.main",
              // color: "red",
              width: 200,
              // borderRadius: 1,
              textAlign: "left",
              marginLeft: "auto",
            }}
          >
            <ListItem button onClick={handleClickAway} className="listitem" color="secondary">
              <ListItemIcon>
                <CottageIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>

          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List>
          <ListItem button onClick={handleClickAway}>
            <ListItemIcon>
              <ChatTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>

          <ListItem button onClick={handleClickAway}>
            <ListItemIcon>
              <TextSnippetSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>

          <ListItem button onClick={handleClickAway}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItem>

          <ListItem button onClick={handleClickAway}>
            <ListItemIcon>
              <GroupAddTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Add Friends" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
