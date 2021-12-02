import React from "react";
import { FormGroup } from "@mui/material";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function LoginForm() {
  return (
    <div>
      <FormGroup>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          {/* <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}
          <TextField id="input-with-sx" label="username" variant="standard" />
        </Box>
        <TextField id="standard-adornment-password" label="password" variant="standard" />
      </FormGroup>
    </div>
  );
}
