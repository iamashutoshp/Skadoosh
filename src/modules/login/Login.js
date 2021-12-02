import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReactDom from 'react-dom'
import LoginForm from "./LoginForm";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    console.log("inside const")
  }

    handleClickOpen () {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  
  render() {
    console.log(`inside render() ${this.state.open}`);
    return (
      <div>
        <Button variant="outlined" onClick={()=>this.handleClickOpen()}>LogIn</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}
        >
          <DialogTitle>login</DialogTitle>
          <DialogContent>
            <LoginForm/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>cancel</Button>
            <Button onClick={this.handleClose}>login</Button>
          </DialogActions>
        </Dialog>
        {console.log(`inside render() ${this.state.open}`)}
      </div>
    );
  }
}