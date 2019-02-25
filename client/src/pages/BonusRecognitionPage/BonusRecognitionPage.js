import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import TitleBar from '../../components/TitleBar';
import styles from './styles';
import BonusRecognitions from '../../components/BonusRecognitions';
import BonusRecognitionIcon from '../../assets/BonusRecognitionIcon';
import ScreenSize from '../../hoc/ScreenSize';
import LoadContent from '../../hoc/LoadContent';
import LoadingScreen from '../../components/UI/LoadingScreen';
import PropTypes from 'prop-types';
import { BONUS_RECOGNITIONS } from '../../routes/routes';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';

class BonusRecognitionPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { classes } = this.props;
    return (
      <LoadContent url={'/EpIncentives'}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingScreen />;
          if (error) return <ErrorHandler from={BONUS_RECOGNITIONS} />;
          const bonuses = data.sort((a, b) => a.wkEndDate < b.wkEndDate);
          return (
            <ScreenSize>
              {({ screenWidth, mobileScreen }) => (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignContent="flex-start"
                  className={classes.bonusRecognitionContainer}
                >
                  <Grid item xs={12} className={classes.bonusTitle}>
                    <TitleBar
                      icon={<BonusRecognitionIcon color={'#0D3C55'} />}
                      title="Incentive Recognitions"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <BonusRecognitions
                      mobile={screenWidth <= mobileScreen}
                      bonuses={bonuses}
                    />
                  </Grid>
                </Grid>
              )}
            </ScreenSize>
          );
        }}
      </LoadContent>
    );
  }
}

BonusRecognitionPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BonusRecognitionPage);
