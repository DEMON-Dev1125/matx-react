import React, { Component } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
  Card,
  CardContent,
  Typography,
  FormHelperText,
  OutlinedInput,
  FormControl,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 497,
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

  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  background: {
    margin: theme.spacing(5),
  },

  title: {
    marginBottom: theme.spacing(3),
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#0F996D",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    fontSize: 14,
    minWidth: 72,
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#0F996D",
      opacity: 1,
    },
    "&$selected": {
      color: "#0F996D",
      fontWeight: theme.typography.fontWeightBold,
    },
    "&:focus": {
      color: "#0F996D",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function Setup() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.background}>
      <div className={classes.title}>View Customer</div>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Personal" />
          <AntTab label="Reviews" />
          <AntTab label="Security" />
          <AntTab label="Setup" />
        </AntTabs>
        <Typography className={classes.padding} />
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
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
                  id="outlined-date-text"
                >
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
        </TabPanel>
      </div>
    </div>
  );
}

export default Setup;
