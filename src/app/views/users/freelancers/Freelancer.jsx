import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Typography, Tabs, Tab, Box } from "@material-ui/core";

//import components
import Personal from "./Personal";
import Security from "./Security";
import Setup from "./Setup";

const useStyles = makeStyles((theme) => ({
  background: {
    margin: theme.spacing(5),
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
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
          <Typography component={"div"} variant={"body1"}>
            {children}
          </Typography>
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

function Freelaner() {
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
        <Typography className={classes.padding} variant={"body1"} />
        <TabPanel value={value} index={0}>
          <Personal />
        </TabPanel>
        <TabPanel value={value} index={1}>
          asdf
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Security />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Setup />
        </TabPanel>
      </div>
    </div>
  );
}

export default Freelaner;
