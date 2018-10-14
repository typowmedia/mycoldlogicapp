import React from 'react';
import {
  Grid,
  Typography,
  Paper,
  withStyles,
} from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { navigation } from '../config';
import { withRouter } from 'react-router-dom';

const DashboardNavigation = ({ classes, history }) => {
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
            <Paper
                className={classes.root}
                elevation={2}
                onClick={() => history.push(nav.route)}
            >
                <div className={classes.navLink}>{nav.icon}</div>
                <Typography variant="headline" component="h3">
                    {nav.name}
                </Typography>
                <Typography component="p">
                    {nav.description}
                </Typography>
            </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

DashboardNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(DashboardNavigation));
