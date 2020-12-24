import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { isMdScreen } from "utils";
import {
  Icon,
  IconButton,
  Badge,
  MenuItem,
  withStyles,
  MuiThemeProvider,
} from "@material-ui/core";

import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";

import { connect } from "react-redux";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { PropTypes } from "prop-types";
import { MatxMenu, MatxSearchBox } from "matx";
import ShoppingCart from "../SharedCompoents/ShoppingCart";
import NotificationBar from "../SharedCompoents/NotificationBar";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
});

const notificationsProps = {
  color: "secondary",
  children: <NotificationsIcon />,
};

const mailProps = {
  color: "error",
  children: <MailIcon />,
};

class Layout1Topbar extends Component {
  state = {};

  updateSidebarMode = (sidebarSettings) => {
    let { settings, setLayoutSettings } = this.props;

    setLayoutSettings({
      ...settings,
      layout1Settings: {
        ...settings.layout1Settings,
        leftSidebar: {
          ...settings.layout1Settings.leftSidebar,
          ...sidebarSettings,
        },
      },
    });
  };

  handleSidebarToggle = () => {
    let { settings } = this.props;
    let { layout1Settings } = settings;

    let mode;
    if (isMdScreen()) {
      mode = layout1Settings.leftSidebar.mode === "close" ? "mobile" : "close";
    } else {
      mode = layout1Settings.leftSidebar.mode === "full" ? "close" : "full";
    }
    this.updateSidebarMode({ mode });
  };

  handleSignOut = () => {
    this.props.logoutUser();
  };

  render() {
    let { theme, settings, className, style } = this.props;
    const topbarTheme =
      settings.themes[settings.layout1Settings.topbar.theme] || theme;
    return (
      <MuiThemeProvider theme={topbarTheme}>
        <div className="topbar">
          <div
            // className={`topbar-hold ${className}`}
            className="topbar-hold"
            style={Object.assign(
              {},
              { backgroundColor: topbarTheme.palette.primary.main },
              style
            )}
          >
            <div className="flex flex-space-between flex-middle h-100">
              <div className="flex">
                <IconButton
                  onClick={this.handleSidebarToggle}
                  className="hide-on-lg"
                >
                  <Icon>menu</Icon>
                </IconButton>
              </div>
              <div className="flex flex-middle ">
                <MatxSearchBox />

                <Badge
                  className="mr-48"
                  badgeContent={100}
                  {...notificationsProps}
                />

                <Badge className="mr-44" badgeContent={100} {...mailProps} />

                <MatxMenu
                  menuButton={
                    <img
                      className="mx-8 text-middle circular-image-small cursor-pointer"
                      src="/assets/images/face-6.jpg"
                      alt="user"
                    />
                  }
                >
                  <MenuItem style={{ minWidth: 185 }}>
                    <Link className="flex flex-middle" to="/">
                      <Icon> home </Icon>
                      <span className="pl-16"> Home </span>
                    </Link>
                  </MenuItem>
                  <MenuItem style={{ minWidth: 185 }}>
                    <Link
                      className="flex flex-middle"
                      to="/page-layouts/user-profile"
                    >
                      <Icon> person </Icon>
                      <span className="pl-16"> Profile </span>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    className="flex flex-middle"
                    style={{ minWidth: 185 }}
                  >
                    <Icon> settings </Icon>
                    <span className="pl-16"> Settings </span>
                  </MenuItem>
                  <MenuItem
                    onClick={this.handleSignOut}
                    className="flex flex-middle"
                    style={{ minWidth: 185 }}
                  >
                    <Icon> power_settings_new </Icon>
                    <span className="pl-16"> Logout </span>
                  </MenuItem>
                </MatxMenu>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout1Topbar.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  settings: state.layout.settings,
});

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, { setLayoutSettings, logoutUser })(Layout1Topbar)
  )
);
