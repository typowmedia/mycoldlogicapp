import React from 'react';
import { Grid, Typography, Button, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles';
import PropTypes from 'prop-types';
import { navigation } from '../config';

const DashboardNavigation = ({ classes }) => {
  return (
    <Grid container spacing={24}>
      {navigation.map(nav => (
        <Grid
          className={classes.navLinkContainer}
          key={nav.name}
          item
          xs={6}
          sm={6}
          md={6}
          lg={4}
        >
          <Button
            className={classes.navButton}
            variant="fab"
            component={Link}
            to={nav.route}
          >
            <div className={classes.navLink}>{nav.icon}</div>
          </Button>
          <Typography>{nav.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

DashboardNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DashboardNavigation);
