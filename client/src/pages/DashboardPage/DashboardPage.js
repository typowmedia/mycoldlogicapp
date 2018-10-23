import React, { Component } from 'react';
import { Grid, withStyles, Hidden } from '@material-ui/core';
import DashboardNavigation from '../../components/Navigation/DashboardNavigation';
import styles from './styles';
import PropTypes from 'prop-types';
import AskManager from '../../components/AskManager';
import ColdLogic from '../../assets/ColdLogicLogo';

class DashboardPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
        className={classes.dashboardContainer}
      >
        <Hidden smUp>
          <Grid item xs={12} className={classes.coldlogic}>
            <ColdLogic color="#0D3C55" />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={12} md={6} className={classes.dashboardGridItem}>
          <DashboardNavigation />
        </Grid>
        <Grid item sm={12} md={6} className={classes.dashboardGridItemTwo}>
          <AskManager />
        </Grid>
      </Grid>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DashboardPage);
