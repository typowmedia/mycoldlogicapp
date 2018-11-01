import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import moment from 'moment';
import PropTypes from 'prop-types';
import NothingFoundScreen from '../UI/NothingFoundScreen';

const BonusRecognitions = ({ classes, mobile, bonuses }) => {
  if (bonuses.length < 1) {
    return <NothingFoundScreen messageTop="There doesn't appear to be any data at this moment." messageBottom="Please try again later."/>;
  }
  if (mobile) {
    return (
      <div className={classes.mobileBonusContainer}>
        {bonuses.map(bonus => {
          // converts bbsfactor into a percentage and fixes precision issues.
          const bbsFactor = Math.round(bonus.bbsFactor * 10000) / 100;
          // fixes dollars to 2 decimal places
          const dlyIncTot = (Math.round(bonus.dlyIncTot * 100) / 100).toFixed(
            2,
          );
          const wklyIncTot = (Math.round(bonus.wklyIncTot * 100) / 100).toFixed(
            2,
          );
          const grssInc = (Math.round(bonus.grssInc * 100) / 100).toFixed(2);
          const netInc = (Math.round(bonus.netInc * 100) / 100).toFixed(2);
          return (
            <div className={classes.bonusMobileCard} key={bonus.id}>
              <div className={classes.bonusMobileCardRow}>
                <h3 className={classes.bonusMobileCardHeader}>
                  Week Ending Date
                </h3>
                <p className={classes.bonusMobileCardText}>
                  {moment(bonus.wkEndDate).format('MMM Do YYYY')}
                </p>
              </div>
              <div className={classes.bonusMobileCardRow}>
                <h3 className={classes.bonusMobileCardHeader}>
                  Daily Incentives
                </h3>
                <p className={classes.bonusMobileCardText}>${dlyIncTot}</p>
              </div>
              <div className={classes.bonusMobileCardRow}>
                <h3 className={classes.bonusMobileCardHeader}>
                  Weekly Incentives
                </h3>
                <p className={classes.bonusMobileCardText}>${wklyIncTot}</p>
              </div>
              <div className={classes.bonusMobileCardRow}>
                <h3 className={classes.bonusMobileCardHeader}>
                  Gross Incentives
                </h3>
                <p className={classes.bonusMobileCardText}>${grssInc}</p>
              </div>
              <div className={classes.bonusMobileCardRow}>
                <h3 className={classes.bonusMobileCardHeader}>BBS Factor</h3>
                <p className={classes.bonusMobileCardText}>{bbsFactor}%</p>
              </div>
              <div className={classes.bonusMobileCardRow}>
                <h3 className={classes.bonusMobileCardHeader}>
                  Net Incentives
                </h3>
                <p className={classes.bonusMobileCardText}>${netInc}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className={classes.bonusContainer}>
      <div className={classes.bonusRow}>
        <h3 className={classes.bonusCellHeading}>Week Ending Date</h3>
        <h3 className={classes.bonusCellHeading}>Daily Incentives</h3>
        <h3 className={classes.bonusCellHeading}>Weekly Incentives</h3>
        <h3 className={classes.bonusCellHeading}>Gross Incentives</h3>
        <h3 className={classes.bonusCellHeading}>BBS Factor</h3>
        <h3 className={classes.bonusCellHeading}>Net Incentives</h3>
      </div>
      {bonuses.map(bonus => {
        // converts bbsfactor into a percentage and fixes precision issues.
        const bbsFactor = Math.round(bonus.bbsFactor * 10000) / 100;
        // fixes dollars to 2 decimal places
        const dlyIncTot = (Math.round(bonus.dlyIncTot * 100) / 100).toFixed(2);
        const wklyIncTot = (Math.round(bonus.wklyIncTot * 100) / 100).toFixed(
          2,
        );
        const grssInc = (Math.round(bonus.grssInc * 100) / 100).toFixed(2);
        const netInc = (Math.round(bonus.netInc * 100) / 100).toFixed(2);

        return (
          <div className={classes.bonusRow} key={bonus.id}>
            <p className={classes.bonusCell}>
              {moment(bonus.wkEndDate).format('MMM Do YYYY')}
            </p>
            <p className={classes.bonusCell}>${dlyIncTot}</p>
            <p className={classes.bonusCell}>${wklyIncTot}</p>
            <p className={classes.bonusCell}>${grssInc}</p>
            <p className={classes.bonusCell}>{bbsFactor}%</p>
            <p className={classes.bonusCell}>${netInc}</p>
          </div>
        );
      })}
    </div>
  );
};

BonusRecognitions.propTypes = {
  mobile: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  bonuses: PropTypes.array.isRequired,
};

export default withStyles(styles)(BonusRecognitions);
