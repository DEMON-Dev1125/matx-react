import React, { Fragment } from "react";
import Menu from "@material-ui/core/Menu";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  menustyle: {
    // width: 150,
    width: "auto",
    border: "1px solid #e6e6e6",
    borderRadius: 30,
    // display: "inline-block",
    padding: 5,
    backgroundColor: "#E6E6E6",
    display: "flex",
    flexDirection: "row",
  },
  // namestyle: {
  //   position:
  // }
  realname: {
    // float: "left",
    textAlign: "left",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 5,
    // backgroundColor: "red",
    display: "block",
  },
  job: {
    // float: "left",
    textAlign: "left",
    fontSize: 12,
    paddingLeft: 5,
    // backgroundColor: "white",
    display: "block",
  },
}));

const MatxMenu = (props) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const children = React.Children.toArray(props.children);
  let { shouldCloseOnItemClick = true, horizontalPosition = "left" } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <div className={classes.menustyle} onClick={handleClick}>
        <div className={classes.namestyle}>
          <span className={classes.realname}>Hi, Apurba Das</span>
          <span className={classes.job}>Admin</span>
        </div>
        <div
          // className={classes.avatar}
          style={{ display: "inline-block" }}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
        >
          {props.menuButton}
        </div>
      </div>
      <Menu
        elevation={8}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: horizontalPosition,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: horizontalPosition,
        }}
      >
        {children.map((child, index) => (
          <div
            onClick={shouldCloseOnItemClick ? handleClose : () => {}}
            key={index}
          >
            {child}
          </div>
        ))}
      </Menu>
    </Fragment>
  );
};

export default MatxMenu;
