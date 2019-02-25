import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { navigation } from '../config';
import NavCard from '../../NavCard';
import styles from './styles';

const DashboardNavigation = ({ classes }) => {
  return (
    <Grid
      container
      zeroMinWidth
      spacing={0}
      className={classes.dashboardNavigation}
    >
      {navigation.map(nav => (
        <Grid
          item
          xs={12}
          sm={6}
          key={nav.name}
          className={classes.dashboardNavigationFlexItem}
        >
          <NavCard nav={nav} />
        </Grid>
      ))}
    </Grid>
  );
};

DashboardNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardNavigation);
