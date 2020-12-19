import React, { Component } from "react";
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
    width: 497,
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
    width: 253,
  },
  textTimeField: {
    width: 163,
  },
  textReasonField: {
    width: 435,
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
    marginTop: 34.8,
  },
}));

function setupCom() {
  const classes = withStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="black" gutterBottom>
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
            type="date"
            id="fromDateField"
            // value={values.date}
            // onChange={handleChange('date')}
            aria-describedby="outlined-date-helper-text"
            inputProps={{
              "aria-label": "date",
            }}
            labelWidth={0}
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
            labelWidth={0}
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
            labelWidth={0}
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
            labelWidth={0}
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
            labelWidth={0}
          />
        </FormControl>
        <button className={classes.button}>Save</button>
        <Typography
          className={clsx(classes.title, classes.currentStatus)}
          color="black"
        >
          Current suspend
        </Typography>
        <hr />
        <Typography className={classes.pos} color="black">
          This suspend have days and time limitation.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default setupCom;
