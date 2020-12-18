import React, { Component } from "react";
import clsx from "clsx";
import {
  makeStyles,
} from "@material-ui/core/styles";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  FormHelperText,
  OutlinedInput,
  FormControl,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
}));

function Setup() {
  const classes = useStyles();

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
          <FormHelperText
            className={classes.helpText}
            id="outlined-weight-helper-text"
          >
            From Date
          </FormHelperText>
          <OutlinedInput
            className={classes.textDateField}
            type="date"
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
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
            id="outlined-weight-helper-text"
          >
            Time
          </FormHelperText>
          <OutlinedInput
            className={classes.textTimeField}
            type="time"
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
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
            id="outlined-weight-helper-text"
          >
            End Date
          </FormHelperText>
          <OutlinedInput
            className={classes.textDateField}
            type="date"
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
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
            id="outlined-weight-helper-text"
          >
            Time
          </FormHelperText>
          <OutlinedInput
            className={classes.textTimeField}
            type="time"
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
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
            id="outlined-weight-helper-text"
          >
            Reason
          </FormHelperText>
          <OutlinedInput
            className={classes.textReasonField}
            multiline
            rows={4}
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            labelWidth={0}
          />
        </FormControl>
        <button className={classes.button}>
          Save
        </button>
      </CardContent>
      <CardActions>
        <Typography className={classes.title} color="black" gutterBottom>
          Current suspend
        </Typography>
        <hr />
        <Typography className={classes.pos} color="textSecondary">
          This suspend have days and time limitation.
        </Typography>
      </CardActions>
    </Card>
  );
}

export default Setup;
