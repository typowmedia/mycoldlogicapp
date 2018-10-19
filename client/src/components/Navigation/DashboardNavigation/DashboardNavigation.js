import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { navigation } from '../config';
import NavCard from '../../NavCard';

const DashboardNavigation = ({ classes }) => {
  return (
    <div className={classes.navFlexContainer}>
      {navigation.map(nav => (
        <div key={nav.name} className={classes.flexContainerItem}>
          <NavCard nav={nav} />
        </div>
      ))}
    </div>
  );
};

DashboardNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DashboardNavigation);
