import React, { Component } from "react";
import { Icon, IconButton, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.contrastText
    // backgroundColor: "#FFFFFF",
    color: "grey",
    width: "40%",
  },
  btnstyle: {
    color: "#0F996D",
    backgroundColor: "white",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 0,
    paddingTop: "0.65rem",
    paddingBottom: "0.65rem",
    paddingLeft: "0.5rem",
  }
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
          {/* <IconButton className={classes.btnstyle}> */}
            <Icon className={classes.btnstyle}>search</Icon>
          {/* </IconButton> */}
          <input
            className={`px-16 search-box ${classes.root}`}
            type="text"
            placeholder="Search anything"
            autoFocus
          />
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
