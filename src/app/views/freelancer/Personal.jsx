import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Paper, Grid, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 671,
  },

  //avatar style
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    margin: "0 auto",
    marginTop: 21,
  },

  userName: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 28,
  },
  majorName: {
    marginTop: 11,
    fontSize: 14,
  },
}));

function Personal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper} variant="outlined">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className={classes.large}
            />
            <Typography
              color="initial"
              align="center"
              component={"p"}
              className={classes.userName}
            >
              Apurba Das
            </Typography>
            <Typography
              color="textSecondary"
              align="center"
              component={"p"}
              className={classes.majorName}
            >
              IT Professional
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} variant="outlined"></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} variant="outlined"></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Personal;
