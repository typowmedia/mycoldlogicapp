import React, { Component } from 'react';
import { Grid, withStyles, withTheme } from '@material-ui/core';
import DashboardNavigation from '../../components/Navigation/DashboardNavigation';
import styles from './styles';
import PropTypes from 'prop-types';
import AskManager from '../../components/AskManager';
import ColdLogic from '../../assets/ColdLogicLogo';

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: window.innerWidth,
    };
  }

  componentDidMount = () => {
    window.addEventListener('resize', this._updateWidth);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this._updateWidth);
    console.log('removed');
  };

  _updateWidth = () => {
    const screenWidth = window.innerWidth;
    this.setState({ screenWidth });
  };
  render() {
    const { classes, theme } = this.props;
    const { screenWidth } = this.state;
    const tabletScreen = theme.breakpoints.width('md');
    return (
      <Grid
        container
        direction={screenWidth <= tabletScreen ? 'column' : 'row'}
        justify={screenWidth <= tabletScreen ? 'flex-start' : 'space-evenly'}
        alignItems={screenWidth <= tabletScreen ? 'stretch' : 'center'}
        className={classes.dashboardContainer}
        spacing={0}
      >
        <Grid item xs={12} className={classes.coldlogic}>
          <figure className={classes.logoContainer}>
            <ColdLogic color="#0D3C55" />
          </figure>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          className={classes.dashboardNavContainer}
        >
          <DashboardNavigation />
        </Grid>
        <Grid item sm={12} md={5} className={classes.dashboardAskManager}>
          <AskManager />
        </Grid>
      </Grid>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withTheme()(withStyles(styles)(DashboardPage));
