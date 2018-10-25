import React, { Component } from 'react';
import { Grid, withStyles, withTheme } from '@material-ui/core';
import LeaveOfAbsenceIcon from '../../assets/LeaveOfAbsenceIcon';
import TitleBar from '../../components/TitleBar';
import LoaRequest from '../../components/LoaRequest';
import LeaveOfAbsenceData from '../../components/LeaveOfAbsenceData';
import { UserContext } from '../../context/UserProvider';
import styles from './styles';
import PropTypes from 'prop-types';

class LeaveOfAbsenceRequestPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: window.innerWidth,
    };
  }

  componentDidMount = () => {
    window.addEventListener('resize', this._updateWidth);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this._updateWidth);
  };

  _updateWidth = () => {
    const screenWidth = window.innerWidth;
    this.setState({ screenWidth });
  };
  render() {
    const { classes, theme } = this.props;
    const { screenWidth } = this.state;
    const tabletScreen = theme.breakpoints.width('md');
    const mobileScreen = theme.breakpoints.width('sm');
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <Grid
            container
            direction={screenWidth <= tabletScreen ? 'column' : 'row'}
            justify={screenWidth <= tabletScreen ? 'flex-start' : 'center'}
            alignItems={screenWidth <= tabletScreen ? 'stretch' : 'flex-start'}
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
      </UserContext.Consumer>
    );
  }
}

LeaveOfAbsenceRequestPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withTheme()(withStyles(styles)(LeaveOfAbsenceRequestPage));
