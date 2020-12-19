import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardContent,
  Typography,
  FormHelperText,
  OutlinedInput,
  FormControl,
} from "@material-ui/core";

const withStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(62),
    margin: "5px 0 0 10px",
  },
  title: {
    margin: theme.spacing(1),
    fontSize: 18,
    fontWeight: "bold",
  },
  pos: {
    margin: theme.spacing(1),
    fontSize: 16,
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing(1),
  },
  textDateField: {
    width: theme.spacing(32),
  },
  textTimeField: {
    width: theme.spacing(20),
  },
  textReasonField: {
    width: theme.spacing(54),
  },
  helpText: {
    marginLeft: theme.spacing(0),
    fontSize: 16,
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

  currentStatus: {
    marginTop: theme.spacing(4),
  },
}));

function Setup() {
  const classes = withStyles();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSave = () => {};

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="initial" gutterBottom>
          Temporary suspend
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          This suspend have days and time limitation.
        </Typography>
        <FormControl
          className={clsx(classes.margin, classes.dateField)}
          variant="outlined"
        >
          <FormHelperText className={classes.helpText} id="outlined-date-text">
            From Date
          </FormHelperText>
          <OutlinedInput
            className={classes.textDateField}
            value={values.fromDate}
            onChange={handleChange("fromoDate")}
            type="date"
            id="fromDateField"
            aria-describedby="outlined-date-helper-text"
            inputProps={{
              "aria-label": "date",
            }}
          />
        </FormControl>
        <FormControl
          className={clsx(classes.margin, classes.timeField)}
          variant="outlined"
        >
          <FormHelperText
            className={classes.helpText}
            id="outlined-time-helper-text"
          >
            Time
          </FormHelperText>
          <OutlinedInput
            className={classes.textTimeField}
            type="time"
            id="fromTimeField"
            aria-describedby="outlined-time-helper-text"
            inputProps={{
              "aria-label": "time",
            }}
          />
        </FormControl>

        <FormControl
          className={clsx(classes.margin, classes.dateField)}
          variant="outlined"
        >
          <FormHelperText
            className={classes.helpText}
            id="outlined-date-helper-text"
          >
            End Date
          </FormHelperText>
          <OutlinedInput
            className={classes.textDateField}
            type="date"
            id="endDateField"
            aria-describedby="outlined-date-helper-text"
            inputProps={{
              "aria-label": "date",
            }}
          />
        </FormControl>
        <FormControl
          className={clsx(classes.margin, classes.timeField)}
          variant="outlined"
        >
          <FormHelperText
            className={classes.helpText}
            id="outlined-time-helper-text"
          >
            Time
          </FormHelperText>
          <OutlinedInput
            className={classes.textTimeField}
            type="time"
            id="endTimeField"
            aria-describedby="outlined-time-helper-text"
            inputProps={{
              "aria-label": "time",
            }}
          />
        </FormControl>

        <FormControl
          className={clsx(classes.margin, classes.reasonField)}
          variant="outlined"
        >
          <FormHelperText
            className={classes.helpText}
            id="outlined-reason-helper-text"
          >
            Reason
          </FormHelperText>
          <OutlinedInput
            className={classes.textReasonField}
            multiline
            rows={4}
            id="reasonField"
            aria-describedby="outlined-reason-helper-text"
            inputProps={{
              "aria-label": "reason",
            }}
          />
        </FormControl>
        <button className={classes.button}>Save</button>
        <Typography
          className={clsx(classes.title, classes.currentStatus)}
          color="initial"
        >
          Current Suspend
        </Typography>
        <hr />
        <Typography className={classes.pos} color="initial">
          This suspend have days and time limitation.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Setup;
