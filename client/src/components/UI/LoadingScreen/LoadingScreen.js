import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import ColdLogicLogo from '../../../assets/ColdLogicLogo';

class LoadingScreen extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.loadingContainer}
      >
        <Grid xs={8} className={classes.loadingItem}>
          <div className={classes.loadingLogoContainer}>
            <ColdLogicLogo color="#0D3C55" />
          </div>
          <div className={classes.loadingBars}>
            <LinearProgress color="secondary" />
            <LinearProgress color="primary" />
          </div>
        </Grid>
      </Grid>
    );
  }
}

LoadingScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingScreen);
