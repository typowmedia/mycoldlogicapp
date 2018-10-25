import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import LeaveOfAbsenceIcon from '../../assets/LeaveOfAbsenceIcon';
import TitleBar from '../../components/TitleBar';
import LoaRequest from '../../components/LoaRequest';
import LeaveOfAbsenceData from '../../components/LeaveOfAbsenceData';
import { UserContext } from '../../context/UserProvider';
import styles from './styles';
import PropTypes from 'prop-types';
import ScreenSize from '../../hoc/ScreenSize';

class LeaveOfAbsenceRequestPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <UserContext.Consumer>
        {({ user }) => (
          <ScreenSize>
            {({ screenWidth, tabletScreen, mobileScreen }) => (
              <Grid
                container
                direction={screenWidth <= tabletScreen ? 'column' : 'row'}
                justify={screenWidth <= tabletScreen ? 'flex-start' : 'center'}
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
                  <LoaRequest user={user} />
                </Grid>
                <Grid item sm={12} md={6} className={classes.loaStats}>
                  <LeaveOfAbsenceData mobile={screenWidth <= mobileScreen} />
                </Grid>
              </Grid>
            )}
          </ScreenSize>
        )}
      </UserContext.Consumer>
    );
  }
}

LeaveOfAbsenceRequestPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LeaveOfAbsenceRequestPage);
