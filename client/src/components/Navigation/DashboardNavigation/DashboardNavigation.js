import React from 'react';
import { Grid, Typography, Paper, withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { navigation } from '../config';
import { withRouter } from 'react-router-dom';

const DashboardNavigation = ({ classes, history }) => {
  return (
    <div className={classes.navContainer}>
      {navigation.map(nav => {
        console.log(nav);
        return (
          <div className={classes.card} onClick={() => history.push(nav.route)}>
            <div className={classes.iconContainer}>{nav.icon}</div>
            <Typography variant="headline" component="h3">
              {nav.name}
            </Typography>
            <Typography component="p">{nav.description}</Typography>
          </div>
        );
      })}
    </div>
  );
};

DashboardNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(DashboardNavigation));
