import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import LeaveOfAbsenceIcon from '../../assets/LeaveOfAbsenceIcon';
import TitleBar from '../../components/TitleBar';
import LeaveOfAbsenceRequest from './LeaveOfAbsenceRequest';
import Spinner from '../../components/UI/Spinner';
import LoadContent from '../../hoc/LoadContent';
import LeaveOfAbsenceData from '../../components/LeaveOfAbsenceData';
import { UserContext } from '../../context/UserProvider';
import styles from './styles';
import PropTypes from 'prop-types';

const LeaveOfAbsenceRequestPage = ({ classes }) => (
  <UserContext.Consumer>
    {({ user }) => (
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12}>
          <TitleBar
            icon={<LeaveOfAbsenceIcon color={'#0D3C55'} />}
            title="Request Leave of Absence"
          />
        </Grid>
        <Grid item>
          <LoadContent url="/LeaveAbsReasons">
            {({ data, error, loading }) => {
              if (loading) return <Spinner color="secondary" size={100} />;
              if (error) return <p>Error</p>;
              return <LeaveOfAbsenceRequest reasons={data} user={user} />;
            }}
          </LoadContent>
        </Grid>
        <Grid item>
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
