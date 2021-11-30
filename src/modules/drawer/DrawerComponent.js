import React from "react";
import { styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";
import TextSnippetSharpIcon from "@mui/icons-material/TextSnippetSharp";
import PeopleIcon from "@mui/icons-material/People";
import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";
import CottageIcon from "@mui/icons-material/Cottage";
import HeaderComp from '../header/HeaderComp'
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DrawerComponent() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} >
      <HeaderComp handleDrawerOpen={handleDrawerOpen} open={open}/>

      <Drawer
        anchor="left"
        open={open}
        onBackdropClick={handleDrawerClose}>
        <DrawerHeader>
          <List
            sx={{
              mx: "auto",
              width: 200,
              textAlign: "left",
              marginLeft: "auto",
            }}
          >
            <ListItem
              button
              onClick={handleDrawerClose}
              className="listitem"
              color="secondary"
            >
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
          <ListItem button onClick={handleDrawerClose}>
            <ListItemIcon>
              <ChatTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>

          <ListItem button onClick={handleDrawerClose}>
            <ListItemIcon>
              <TextSnippetSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>

          <ListItem button onClick={handleDrawerClose}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItem>

          <ListItem button onClick={handleDrawerClose}
          >
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
