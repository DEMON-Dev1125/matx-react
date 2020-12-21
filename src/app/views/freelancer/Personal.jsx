import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  Grid,
  Typography,
  Avatar,
  Divider,
  IconButton,
} from "@material-ui/core";

import { MoreVert, Create, Edit } from "@material-ui/icons";

import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(1),
    // color: theme.palette.text.secondary,
    height: "auto",
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
    marginTop: theme.spacing(3.5),
  },
  majorName: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(4),
    fontSize: 14,
  },

  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: theme.spacing(3),
  },
  inforField: {
    fontSize: 14,
    textAlign: "center",
  },
  verifiField: {
    fontSize: 12,
    textAlign: "center",
  },

  title: {
    margin: theme.spacing(3),
    fontSize: 14,
    fontWeight: "bold",
  },

  header: {
    marginLeft: theme.spacing(3),
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    marginLeft: theme.spacing(3),
    fontSize: 14,
    fontWeight: "bold",
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
              component="p"
              className={classes.userName}
            >
              Apurba Das
            </Typography>
            <Typography
              color="textSecondary"
              align="center"
              component="p"
              className={classes.majorName}
            >
              IT Professional
            </Typography>
            <Divider />
            <Grid container xl={12} alignItems="center" className="my-20">
              <Grid item xs={4} className={classes.itemTitle}>
                Email
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                apruba@gmail.com
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                Verified
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="display more actions"
                  edge="start"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
            <Grid container xl={12} alignItems="center" className="my-20">
              <Grid item xs={4} className={classes.itemTitle}>
                KYC
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                Identity Verification
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                Not Verified
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="display more actions"
                  edge="start"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
            <Grid container xl={12} alignItems="center" className="my-20">
              <Grid item xs={4} className={classes.itemTitle}>
                Mobile
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                Mobile Verification
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                Not Verified
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="display more actions"
                  edge="start"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
            <Grid container xl={12} alignItems="center" className="my-20">
              <Grid item xs={4} className={classes.itemTitle}>
                Payment
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                Payment Verification
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                Not Verified
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="display more actions"
                  edge="start"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
            <Grid container xl={12} alignItems="center" className="my-20">
              <Grid item xs={4} className={classes.itemTitle}>
                Country
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                United State
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="display more actions"
                  edge="start"
                  color="inherit"
                >
                  <Edit />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
            <Grid container xl={12} alignItems="center" className="my-20">
              <Grid item xs={4} className={classes.itemTitle}>
                Category
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                Website and IT
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="display more actions"
                  edge="start"
                  color="inherit"
                >
                  <Edit />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} variant="outlined">
            <Typography color="initial" className={classes.title}>
              Billing
            </Typography>
            <Divider />
            <Grid container xl={12} alignItems="center" className="my-20">
              <Grid item xs={4} className={classes.itemTitle}>
                Credit Card
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                VISA **** 5654
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                Verified
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="display more actions"
                  edge="start"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
            <Grid container xl={12} alignItems="center" className="my-20">
              <Grid item xs={4} className={classes.itemTitle}>
                Credit Card
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                VISA **** 5654
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                In Active
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="display more actions"
                  edge="start"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
            <Grid container xl={12} alignItems="center" className="my-20">
              <Grid item xs={4} className={classes.itemTitle}>
                Paypal
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                apurba@gmail.com
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                Verified
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="display more actions"
                  edge="start"
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} variant="outlined">
            <Grid container xl={12} spacing={3} className="my-20">
              <Grid item xl={6}>
                <Typography component="p" className={classes.header}>
                  Available Balance
                </Typography>
                <Typography component="p" className={classes.content}>
                  $100.00 USD
                </Typography>
              </Grid>
              <Grid item xl={6}>
                <Typography component="p" className={classes.header}>
                  Total Earning
                </Typography>
                <Typography component="p" className={classes.content}>
                  $5000.00 USD
                </Typography>
              </Grid>
            </Grid>
            <Grid container xl={12} spacing={3} className="my-20">
              <Grid item xl={6}>
                <Typography component="p" className={classes.header}>
                  Total Withdraw
                </Typography>
                <Typography component="p" className={classes.content}>
                  $50000.00 USD
                </Typography>
              </Grid>
              <Grid item xl={6}>
                <Typography component="p" className={classes.header}>
                  Up Coming
                </Typography>
                <Typography component="p" className={classes.content}>
                  $300.00 USD
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Personal;
