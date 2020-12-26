import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Grid, Card, IconButton, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  avadar: {
    width: "108px",
    height: "108px",
    borderRadius: "50%",
    margin: "0 37px 0 0",
  },
  avatar: {
    margin: "auto",
  },
  content: {
    width: "80%",
    margin: "auto",
  },
  margscale: {
    marginBottom: "0px",
  },
  iconbutton: {
    width: "auto",
    margin: "auto",
  },
  jobtitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  feedback: {
    fontSize: 14,
  },
}));

const rows = [
  {
    jobtitle: "I need a logo Design",
    feedback:
      "“ In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ”",
    rate: 5,
  },
  {
    jobtitle: "Looking for full-stack developer",
    feedback:
      "“ In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ”",
    rate: 4.8,
  },
  {
    jobtitle: "Javascript developer",
    feedback:
      "“ In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ”",
    rate: 3.3,
  },
  {
    jobtitle: "PHP developer",
    feedback:
      "“ In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ”",
    rate: 4.4,
  },
  {
    jobtitle: "HTML / CSS developer",
    feedback:
      "“ In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ”",
    rate: 3.6,
  },
  {
    jobtitle: "senior react js developer",
    feedback:
      "“ In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ”",
    rate: 4.3,
  },
];

const AppProgress = () => {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
};

const Rowitems = ({ classes }) => {
  return rows.map((rowitem, index) => (
    <Grid item xs={12} md={6} key={index}>
      <Card className="play-card p-sm-24 bg-paper" elevation={6}>
        <div className={classes.card}>
          <div className={classes.avatar}>
            <img
              className={classes.avadar}
              src="/assets/images/faces/face-1.png"
            />
          </div>
          <div className={classes.content}>
            <Typography component="p" className={classes.jobtitle}>
              {rowitem.jobtitle}
            </Typography>
            <Typography component="p" className={classes.feedback}>
              {rowitem.feedback}
            </Typography>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="read-only"
                value={rowitem.rate}
                precision={0.1}
                readOnly
              />
            </Box>
          </div>
          <div className={classes.iconbutton}>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              // onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
      </Card>
    </Grid>
  ));
};

const Review = ({ theme }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className="mb-24">
      <Rowitems classes={classes} />
    </Grid>
  );
};

export default Review;
