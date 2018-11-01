import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import DashboardNavigation from '../../components/Navigation/DashboardNavigation';
import styles from './styles';
import PropTypes from 'prop-types';
import AskManager from '../../components/AskManager';
import ColdLogic from '../../assets/ColdLogicLogo';
import ScreenSize from '../../hoc/ScreenSize';
import LoadContent from '../../hoc/LoadContent';
import LoadingScreen from '../../components/UI/LoadingScreen';

class DashboardPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <LoadContent url="/Departments">
        {({ loading, error, data }) => {
          if (loading) return <LoadingScreen />;
          if (error) return <p>Error</p>;
          return (
            <ScreenSize>
              {({ screenWidth, tabletScreen }) => (
                <Grid
                  container
                  direction={screenWidth <= tabletScreen ? 'column' : 'row'}
                  justify={
                    screenWidth <= tabletScreen ? 'flex-start' : 'space-evenly'
                  }
                  alignItems={
                    screenWidth <= tabletScreen ? 'stretch' : 'center'
                  }
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
                  <Grid
                    item
                    sm={12}
                    md={6}
                    className={classes.dashboardAskManager}
                  >
                    <AskManager departments={data} />
                  </Grid>
                </Grid>
              )}
            </ScreenSize>
          );
        }}
      </LoadContent>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DashboardPage);
