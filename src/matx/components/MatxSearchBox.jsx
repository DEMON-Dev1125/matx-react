import React, { Component } from "react";
import { Icon, IconButton, withStyles } from "@material-ui/core";
// import { fade } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const styles = (theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.contrastText
    // backgroundColor: "#FFFFFF",
    color: "#F2F2F2",
    width: "30rem",
  },
  // btnstyle: {
  //   color: "#0F996D",
  //   backgroundColor: "white",
  //   borderTopLeftRadius: 4,
  //   borderTopRightRadius: 0,
  //   borderBottomLeftRadius: 4,
  //   borderBottomRightRadius: 0,
  //   paddingTop: "0.65rem",
  //   paddingBottom: "0.65rem",
  //   paddingLeft: "0.5rem",
  // },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade("#FFFFFF", 0.15),
    // "&:hover": {
    //   backgroundColor: fade("#FFFFFF", 0.25),
    // },
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(3),
    //   width: "auto",
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0F996D",
  },
  inputRoot: {
    color: "#707070",
  },
  inputInput: {
    padding: "13px 8px 13px 0",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
});

class MatxSearchBox extends Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let { classes } = this.props;
    return (
      <React.Fragment>
        {/* {!this.state.open && (
          <IconButton onClick={this.toggle}>
            <Icon>search</Icon>
          </IconButton>
        )}

        {this.state.open && ( */}
        <div
          className={`flex flex-middle h-70 matx-search-box ${classes.root}`}
        >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search anything"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {/* <IconButton className={classes.btnstyle}> */}
          {/* <Icon className={classes.btnstyle}>search</Icon> */}
          {/* </IconButton> */}
          {/* <input
            className={`px-16 search-box ${classes.root}`}
            type="text"
            placeholder="Search anything"
            autoFocus
          /> */}
          {/* <IconButton onClick={this.toggle} className="text-middle mx-4">
              <Icon>close</Icon>
            </IconButton> */}
        </div>
        {/* )} */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MatxSearchBox);
