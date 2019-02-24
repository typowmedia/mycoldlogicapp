import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ColdLogic from '../../../assets/ColdLogicLogo';
import { withRouter } from 'react-router-dom';
import DrawerNav from '../DrawerNav';
import styles from './styles';
import { DASHBOARD } from '../../../routes/routes';
import ScreenSize from '../../../hoc/ScreenSize';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDrawer: false,
    };
  }
  _toggleDrawer = open => {
    this.setState({ showDrawer: open });
  };
  _showLogo = (location, currWidth, mobileScreenWidth) => {
    if (location === DASHBOARD && currWidth <= mobileScreenWidth) return null;
    return (
      <div
        className={this.props.classes.logo}
        onClick={() => {
          this.props.history.push(DASHBOARD);
        }}
      >
        <ColdLogic color="#f4f4f4" />
      </div>
    );
  };
  render() {
    const { classes, user, history, logout, location } = this.props;
    return (
      <ScreenSize>
        {({ screenWidth, mobileScreen }) => (
          <Fragment>
            <AppBar position="fixed">
              <Toolbar className={classes.toolbar}>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={() => this._toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h5"
                  color="inherit"
                  className={classes.userWelcome}
                >
                  Welcome {user.FirstName}
                </Typography>
                {this._showLogo(location.pathname, screenWidth, mobileScreen)}
              </Toolbar>
            </AppBar>
            <DrawerNav
              show={this.state.showDrawer}
              clicked={show => this._toggleDrawer(show)}
              history={history}
              logout={logout}
              user={{ firstname: user.FirstName, lastname: user.LastName }}
            />
          </Fragment>
        )}
      </ScreenSize>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavigationBar));
