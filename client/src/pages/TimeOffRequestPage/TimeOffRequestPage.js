import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import TimeOffIcon from '../../assets/TimeOffIcon';
import TitleBar from '../../components/TitleBar';
import TimeOffRequest from './TimeOffRequest';
import styles from './styles';
import PropTypes from 'prop-types';

const TimeOffRequestPage = ({ classes }) => (
  <Grid container justify="center" className={classes.root}>
    <Grid item xs={12} md={8}>
      <TitleBar
        icon={<TimeOffIcon color={'#0D3C55'} />}
        title="Request Time Off"
      />
    </Grid>
    <Grid item xs={12} md={8}>
      <TimeOffRequest />
    </Grid>
  </Grid>
);

TimeOffRequestPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TimeOffRequestPage);
