import React, { useState, useRef } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Visibility, VisibilityOff } from "@material-ui/icons";
import MuiPhoneNumber from "material-ui-phone-number";

// import { getTimeDifference } from "utils.js";

import {
  Paper,
  Grid,
  Typography,
  OutlinedInput,
  FormControl,
  InputAdornment,
  IconButton,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  title: {
    margin: theme.spacing(1),
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    margin: theme.spacing(1),
    fontSize: 16,
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#1C1C1C",
    border: "none",
    color: "white",
    width: 100,
    height: 46,
    textAlign: "center",
    display: "inline-block",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "3.85",
    fontWeight: "bold",
  },
}));

export default function Security() {
  const classes = useStyles();

  const newPass = useRef();
  const confirmPass = useRef();
  const email = useRef();
  const phonenumber = useRef();
  const status = useRef();

  const [values, setValues] = useState({
    newPass: "",
    confirmPass: "",
    email: "",
    status: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const savePassButton = (event) => {
    event.preventDefault();
    const New = newPass.current.value;
    const Confirm = confirmPass.current.value;
    if (New == Confirm) {
      console.log("Success");
    } else console.log("Failed");
  };

  const saveEmailButton = () => {
    console.log("email", email.current.value);
  };

  const saveMobileButton = () => {
    const Phonenumber = phonenumber.current.state.formattedNumber;
    const Status = status.current.value;
    console.log(Phonenumber, Status);
  };

  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper} variant="outlined">
            <Typography className={classes.title} color="initial">
              Password
            </Typography>
            <Typography className={classes.text} color="textSecondary">
              Last updated a year ago.
              {/* {getTimeDifference(new Date(notification.timestamp))} ago */}
            </Typography>
            <FormControl
              fullWidth
              className={clsx(classes.margin, "pr-10")}
              variant="outlined"
            >
              <OutlinedInput
                fullWidth
                className={classes.passField}
                placeholder="Set new password"
                id="newPass"
                inputRef={newPass}
                type={values.showPassword ? "text" : "password"}
                value={values.newPass}
                onChange={handleChange("newPass")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              fullWidth
              className={clsx(classes.margin, "pr-10")}
              variant="outlined"
            >
              <OutlinedInput
                fullWidth
                className={classes.passField}
                placeholder="Confirm new password"
                id="confirmPass"
                inputRef={confirmPass}
                type="password"
                value={values.confirmPass}
                onChange={handleChange("confirmPass")}
              />
            </FormControl>
            <button onClick={savePassButton} className={classes.button}>
              Save
            </button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} variant="outlined">
            <Typography className={classes.title} color="initial">
              Email
            </Typography>
            <Typography className={classes.text} color="textSecondary">
              apurba@gmail.com
            </Typography>
            <FormControl
              fullWidth
              className={clsx(classes.margin, "pr-10")}
              variant="outlined"
            >
              <OutlinedInput
                fullWidth
                className={classes.passField}
                inputRef={email}
                placeholder="Enter your new email"
                id="outlined-adornment-email"
                type="text"
                value={values.email}
                onChange={handleChange("email")}
              />
            </FormControl>
            <button onClick={saveEmailButton} className={classes.button}>
              Save
            </button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} variant="outlined">
            <Typography className={classes.title} color="initial">
              Mobile
            </Typography>
            <Typography className={classes.text} color="textSecondary">
              Mobile not added
            </Typography>

            <MuiPhoneNumber
              fullWidth
              className={clsx(classes.margin, "pr-10")}
              variant="outlined"
              name="phone"
              data-cy="user-phone"
              defaultCountry={"us"}
              ref={phonenumber}
            />
            <FormControl
              fullWidth
              variant="outlined"
              className={clsx(classes.margin, "pr-10")}
            >
              <Select
                fullWidth
                native
                value={values.staus}
                onChange={handleChange("status")}
                inputRef={status}
                inputProps={{
                  name: "status",
                  id: "outlined-status",
                }}
              >
                <option value={""} />
                <option value={1}>Verified</option>
                <option value={0}>Not Verified</option>
              </Select>
            </FormControl>
            <button onClick={saveMobileButton} className={classes.button}>
              Save
            </button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
