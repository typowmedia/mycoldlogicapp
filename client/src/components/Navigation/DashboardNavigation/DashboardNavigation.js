import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { navigation } from '../config';
import NavCard from '../../NavCard';

const DashboardNavigation = ({ classes }) => {
  return (
    <Grid container zeroMinWidth spacing={24}>
      {navigation.map(nav => (
        <Grid item xs={6} key={nav.name}>
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
