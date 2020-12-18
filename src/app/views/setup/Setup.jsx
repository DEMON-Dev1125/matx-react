import React, { Component } from "react";
import clsx from 'clsx';

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  FormHelperText,
  FilledInput,
  FormControl
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 497,
    margin: "5px 0 0 10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '25ch',
  },
}));

function Setup() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="black" gutterBottom>
          Temporary suspend
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          This suspend have days and time limitation.
        </Typography>

        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <FilledInput
            id="filled-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            // endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Setup;
