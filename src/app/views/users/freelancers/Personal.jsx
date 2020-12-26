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

import { Edit } from "@material-ui/icons";

import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrows: 1,
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

const rows = {
  realname: "Apurba Das",
  majortitle: "IT Professional",
  email: "apruba@gmail.com",
  country: "India",
  category: "Website and IT",
  emailstatus: 1,
  kycstatus: 0,
  mobilestatus: 0,
  paymentstatus: 0,
  cardstatus: 1,
  paypalstatus: 0,
};

function Personal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper} variant="outlined">
            <Avatar
              alt="Remy Sharp"
              src="/assets/images/faces/face-1.png"
              className={classes.large}
            />
            <Typography
              color="initial"
              align="center"
              component="p"
              className={classes.userName}
            >
              {rows.realname}
            </Typography>
            <Typography
              color="textSecondary"
              align="center"
              component="p"
              className={classes.majorName}
            >
              {rows.majortitle}
            </Typography>
            <Divider />
            <Grid container xl={12} alignItems="center" className="my-10">
              <Grid item xs={4} className={classes.itemTitle}>
                Email
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                {rows.email}
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                {rows.emailstatus == 1 ? (
                  <small className="bg-green text-white px-8 my-10 ">
                    Verified
                  </small>
                ) : (
                  <small className="bg-light-gray text-gray px-8 my-10 ">
                    Not Verified
                  </small>
                )}
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
            <Grid container xl={12} alignItems="center" className="my-10">
              <Grid item xs={4} className={classes.itemTitle}>
                KYC
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                Identity Verification
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                {rows.kycstatus == 1 ? (
                  <small className="bg-green text-white px-8 my-10 ">
                    Verified
                  </small>
                ) : (
                  <small className="bg-light-gray text-gray px-8 my-10 ">
                    Not Verified
                  </small>
                )}
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
            <Grid container xl={12} alignItems="center" className="my-10">
              <Grid item xs={4} className={classes.itemTitle}>
                Mobile
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                Mobile Verification
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                {rows.mobilestatus == 1 ? (
                  <small className="bg-green text-white px-8 my-10 ">
                    Verified
                  </small>
                ) : (
                  <small className="bg-light-gray text-gray px-8 my-10 ">
                    Not Verified
                  </small>
                )}
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
            <Grid container xl={12} alignItems="center" className="my-10">
              <Grid item xs={4} className={classes.itemTitle}>
                Payment
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                Payment Verification
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                {rows.paymentstatus == 1 ? (
                  <small className="bg-green text-white px-8 my-10 ">
                    Verified
                  </small>
                ) : (
                  <small className="bg-light-gray text-gray px-8 my-10 ">
                    Not Verified
                  </small>
                )}
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
            <Grid container xl={12} alignItems="center" className="my-10">
              <Grid item xs={4} className={classes.itemTitle}>
                Country
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                {rows.country}
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
            <Grid container xl={12} alignItems="center" className="my-10">
              <Grid item xs={4} className={classes.itemTitle}>
                Category
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                {rows.category}
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
            <Grid container xl={12} alignItems="center" className="my-10">
              <Grid item xs={4} className={classes.itemTitle}>
                Credit Card
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                VISA **** 5654
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                {rows.cardstatus == 1 ? (
                  <small className="bg-green text-white px-8 my-10 ">
                    Active
                  </small>
                ) : (
                  <small className="bg-light-gray bg-error px-8 my-10 ">
                    In Active
                  </small>
                )}
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
            <Grid container xl={12} alignItems="center" className="my-10">
              <Grid item xs={4} className={classes.itemTitle}>
                Credit Card
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                VISA **** 5654
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                {rows.cardstatus == 1 ? (
                  <small className="bg-green text-white px-8 my-10 ">
                    Active
                  </small>
                ) : (
                  <small className="bg-light-gray bg-error px-8 my-10 ">
                    In Active
                  </small>
                )}
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
            <Grid container xl={12} alignItems="center" className="my-10">
              <Grid item xs={4} className={classes.itemTitle}>
                Paypal
              </Grid>
              <Grid item xs={4} className={classes.inforField}>
                apurba@gmail.com
              </Grid>
              <Grid item xs={3} className={classes.verifiField}>
                {rows.paypalstatus == 1 ? (
                  <small className="bg-green text-white px-8 my-10 ">
                    Active
                  </small>
                ) : (
                  <small className="bg-light-gray bg-error px-8 my-10 ">
                    In Active
                  </small>
                )}
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
            <Grid container xl={12} spacing={3} className="my-10">
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
            <Grid container xl={12} spacing={3} className="my-10">
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
