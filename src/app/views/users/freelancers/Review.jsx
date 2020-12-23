import React, { Component } from "react";
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
    margin: "auto"
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
    marginBottom: 10
  },
  feedback: {
    fontSize: 14,
  },
}));

const AppProgress = () => {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
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

const Review = ({ theme }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(3);

  const reviews = (
    <Grid item xs={12} md={6}>
      <Card className="play-card p-sm-24 bg-paper" elevation={6}>
        <div className={classes.card}>
          <div className={classes.avatar}>
            <img className={classes.avadar} src="/assets/images/face-1.jpg" />
          </div>
          <div className={classes.content}>
            <Typography component="p" className={classes.jobtitle}>
              I need a logo Design
            </Typography>
            <Typography component="p" className={classes.feedback}>
              “ In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. ”
            </Typography>
            <Box
              classes={{ root: classes.margscale }}
              component="fieldset"
              mb={3}
              borderColor="transparent"
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
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
  );

  return (
    <Grid container spacing={3} className="mb-24">
      {reviews}
      {reviews}
      {reviews}
      {reviews}
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={3}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: { "aria-label": "rows per page" },
          native: true,
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      /> */}
    </Grid>
  );
};

export default Review;
