import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ColdLogic from '../../../assets/ColdLogicLogo';
import { withRouter } from 'react-router-dom';
import DrawerNav from '../DrawerNav';
import styles from './styles';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDrawer: false,
    };
  }
  toggleDrawer = open => {
    this.setState({ showDrawer: open });
  };
  render() {
    const { classes, user, history, logout } = this.props;
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="display1"
              color="inherit"
              className={classes.userWelcome}
            >
              Welcome {user.FirstName}
            </Typography>
            <Hidden xsDown>
              <div
                className={classes.logo}
                onClick={() => {
                  history.push('/dashboard');
                }}
              >
                <ColdLogic color="#f4f4f4" />
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
        <DrawerNav
          show={this.state.showDrawer}
          clicked={show => this.toggleDrawer(show)}
          history={history}
          logout={logout}
          user={{ firstname: user.FirstName, lastname: user.LastName }}
        />
      </Fragment>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default withRouter(withStyles(styles)(NavigationBar));
