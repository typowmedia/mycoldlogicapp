import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import LeaveOfAbsenceIcon from '../../assets/LeaveOfAbsenceIcon';
import TitleBar from '../../components/TitleBar';
import LoaRequest from '../../components/LoaRequest';
import LeaveOfAbsenceData from '../../components/LeaveOfAbsenceData';
import { UserContext } from '../../context/UserProvider';
import styles from './styles';
import PropTypes from 'prop-types';

const LeaveOfAbsenceRequestPage = ({ classes }) => (
  <UserContext.Consumer>
    {({ user }) => (
      <Grid container justify="center" className={classes.loaContainer}>
        <Grid item xs={12} className={classes.loaTitle}>
          <TitleBar
            icon={<LeaveOfAbsenceIcon color={'#0D3C55'} />}
            title="Request Leave of Absence"
          />
        </Grid>
        <Grid item sm={12} md={6} className={classes.loaRequest}>
          <LoaRequest user={user} />
        </Grid>
        <Grid item sm={12} md={6} className={classes.loaStats}>
          <LeaveOfAbsenceData />
        </Grid>
      </Grid>
    )}
  </UserContext.Consumer>
);

LeaveOfAbsenceRequestPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LeaveOfAbsenceRequestPage);
