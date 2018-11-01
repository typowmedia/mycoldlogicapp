import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import LeaveOfAbsenceIcon from '../../assets/LeaveOfAbsenceIcon';
import TitleBar from '../../components/TitleBar';
import LoaForm from '../../components/Forms/LoaForm';
import LeaveOfAbsenceData from '../../components/LeaveOfAbsenceData';
import { UserContext } from '../../context/UserProvider';
import styles from './styles';
import PropTypes from 'prop-types';
import ScreenSize from '../../hoc/ScreenSize';
import LoadLeaveOfAbsence from '../../hoc/LoadLeaveOfAbsence';
import LoadingScreen from '../../components/UI/LoadingScreen';

class LeaveOfAbsenceRequestPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { classes } = this.props;

    return (
      <LoadLeaveOfAbsence>
        {({ data, reasons, error, loading }) => {
          if (loading) return <LoadingScreen />;
          if (error) return <p>Error</p>;
          data.sort(
            (a, b) =>
              new Date(b.from).setHours(0, 0, 0, 0) -
              new Date(a.from).setHours(0, 0, 0, 0),
          );
          return (
            <UserContext.Consumer>
              {({ user }) => (
                <ScreenSize>
                  {({ screenWidth, tabletScreen, mobileScreen }) => (
                    <Grid
                      container
                      direction={screenWidth <= tabletScreen ? 'column' : 'row'}
                      justify={
                        screenWidth <= tabletScreen ? 'flex-start' : 'center'
                      }
                      alignItems={
                        screenWidth <= tabletScreen ? 'stretch' : 'flex-start'
                      }
                      className={classes.loaContainer}
                    >
                      <Grid item xs={12} className={classes.loaTitle}>
                        <TitleBar
                          icon={<LeaveOfAbsenceIcon color={'#0D3C55'} />}
                          title="Request Leave of Absence"
                        />
                      </Grid>
                      <Grid item sm={12} md={6} className={classes.loaRequest}>
                        <LoaForm reasons={reasons} user={user} />
                      </Grid>
                      <Grid item sm={12} md={6} className={classes.loaStats}>
                        <LeaveOfAbsenceData
                          mobile={screenWidth <= mobileScreen}
                          data={data}
                        />
                      </Grid>
                    </Grid>
                  )}
                </ScreenSize>
              )}
            </UserContext.Consumer>
          );
        }}
      </LoadLeaveOfAbsence>
    );
  }
}

LeaveOfAbsenceRequestPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeaveOfAbsenceRequestPage);
