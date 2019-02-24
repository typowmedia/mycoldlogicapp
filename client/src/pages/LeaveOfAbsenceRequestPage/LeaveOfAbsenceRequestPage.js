import React, { Component, Fragment } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import LeaveOfAbsenceIcon from '../../assets/LeaveOfAbsenceIcon';
import TitleBar from '../../components/TitleBar';
import LoaForm from '../../components/Forms/LoaForm';
import { UserContext } from '../../context/UserProvider';
import styles from './styles';
import PropTypes from 'prop-types';
import ScreenSize from '../../hoc/ScreenSize';
import LoadLeaveOfAbsence from '../../hoc/LoadLeaveOfAbsence';
import LoadingScreen from '../../components/UI/LoadingScreen';
import { REQUEST_TIME_OFF, REQUEST_TIME_OFF_2 } from '../../routes/routes';
import ReportSuccess from '../../components/ReportSuccess';
import Pagination from '../../components/Pagination';

class LeaveOfAbsenceRequestPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { classes, match, history } = this.props;

    return (
      <LoadLeaveOfAbsence>
        {({ reasons, torLoaStat, loaCount, error, loading }) => {
          if (loading) return <LoadingScreen />;
          if (error) return <p>Error</p>;
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
                      alignContent={
                        screenWidth <= tabletScreen ? 'stretch' : 'flex-start'
                      }
                      className={classes.loaContainer}
                    >
                      <Grid item xs={12} className={classes.loaTitle}>
                        <TitleBar
                          icon={<LeaveOfAbsenceIcon color={'#0D3C55'} />}
                          title="Unpaid Time Off Request"
                        />
                      </Grid>
                      {match.path === REQUEST_TIME_OFF_2 ? (
                        <Grid item sm={12} className={classes.loaSuccess}>
                          <ReportSuccess
                            leftBtnClick={() => history.push(REQUEST_TIME_OFF)}
                            leftBtnTitle="Back to Unpaid Leave"
                            message="Your Request has been sent. Your supervisor will be in contact with you shortly."
                          />
                        </Grid>
                      ) : (
                        <Fragment>
                          <Grid
                            item
                            sm={12}
                            md={6}
                            className={classes.loaRequest}
                          >
                            <LoaForm reasons={reasons} user={user} />
                          </Grid>
                          <Grid
                            item
                            sm={12}
                            md={6}
                            className={classes.loaStats}
                          >
                            <Pagination
                              reasons={reasons}
                              torLoaStat={torLoaStat}
                              loaCount={loaCount}
                              mobile={screenWidth <= mobileScreen}
                            />
                          </Grid>
                        </Fragment>
                      )}
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
