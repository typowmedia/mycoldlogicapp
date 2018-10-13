import React from 'react';
import {
  Grid,
  Typography,
  Paper,
  withStyles,
  Card,
  CardContent,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
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
          <Card
            className={classes.card}
            onClick={() => history.push(nav.route)}
          >
            <Paper
              className={classes.navButton}
              variant="fab"
              component={Link}
              to={nav.route}
            >
              <div className={classes.navLink}>{nav.icon}</div>
            </Paper>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {nav.name}
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

DashboardNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(DashboardNavigation));
