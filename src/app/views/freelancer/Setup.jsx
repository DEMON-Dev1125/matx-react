import React, { useRef, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardContent,
  Typography,
  FormHelperText,
  OutlinedInput,
  FormControl,
  Divider,
} from "@material-ui/core";

const withStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(62),
    // padding: "10px 0 0 15px",
  },
  content: {
    padding: 0,
  },
  title: {
    margin: theme.spacing(2),
    fontSize: 18,
    fontWeight: "bold",
  },
  pos: {
    margin: theme.spacing(2),
    fontSize: 16,
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing(2),
  },
  textDateField: {
    width: theme.spacing(32),
  },
  textTimeField: {
    width: theme.spacing(20),
  },
  textReasonField: {
    width: theme.spacing(56),
  },
  helpText: {
    marginLeft: theme.spacing(0),
    fontSize: 16,
  },
  button: {
    margin: theme.spacing(2),
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

  const fromDate = useRef();
  const fromTime = useRef();
  const endDate = useRef();
  const endTime = useRef();
  const reason = useRef();

  const [values, setValues] = useState({
    fromDate: "",
    fromTime: "",
    endDate: "",
    endTime: "",
    reason: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickSave = () => {
    const FromDate = fromDate.current.value;
    const FromTime = fromTime.current.value;
    const EndDate = endDate.current.value;
    const EndTime = endTime.current.value;
    const Reason = reason.current.value;
    if (
      FromDate == "" &&
      FromTime == "" &&
      EndDate == "" &&
      EndTime == "" &&
      Reason == ""
    ) {
      console.log("====", FromDate, FromTime, EndDate, EndTime, Reason);
    } else {
      console.log("++++", FromDate, FromTime, EndDate, EndTime, Reason);
    }
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
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
            inputRef={fromDate}
            className={classes.textDateField}
            value={values.fromDate}
            onChange={handleChange("fromDate")}
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
            inputRef={fromTime}
            className={classes.textTimeField}
            value={values.fromTime}
            onChange={handleChange("fromTime")}
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
            inputRef={endDate}
            className={classes.textDateField}
            value={values.endDate}
            onChange={handleChange("endDate")}
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
            inputRef={endTime}
            className={classes.textTimeField}
            value={values.endTime}
            onChange={handleChange("endTime")}
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
            inputRef={reason}
            className={classes.textReasonField}
            value={values.reason}
            onChange={handleChange("reason")}
            multiline
            rows={4}
            id="reasonField"
            aria-describedby="outlined-reason-helper-text"
            inputProps={{
              "aria-label": "reason",
            }}
          />
        </FormControl>
        <button onClick={handleClickSave} className={classes.button}>
          Save
        </button>
        <Typography
          className={clsx(classes.title, classes.currentStatus)}
          color="initial"
        >
          Current Suspend
        </Typography>
        <Divider />
        <Typography className={classes.pos} color="initial">
          This suspend have days and time limitation.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Setup;
