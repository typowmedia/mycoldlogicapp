import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import NothingFoundScreen from '../UI/NothingFoundScreen';

const LeaveOfAbsenceData = ({ classes, mobile, data }) => {
  if (data.length < 1)
    return <NothingFoundScreen messageTop="No current requests to show" />;
  if (mobile) {
    return (
      <div className={classes.mobileLoaContainer}>
        {data.map(loa => {
          return (
            <div className={classes.mobileCard} key={loa.id}>
              <div className={classes.mobileCardRow}>
                <h3 className={classes.mobileCardHeader}>Reason</h3>
                <p className={classes.mobileCardText}>{loa.reason}</p>
              </div>
              <div className={classes.mobileCardRow}>
                <h3 className={classes.mobileCardHeader}>From</h3>
                <p className={classes.mobileCardText}>{loa.from}</p>
              </div>
              <div className={classes.mobileCardRow}>
                <h3 className={classes.mobileCardHeader}>To</h3>
                <p className={classes.mobileCardText}>{loa.to}</p>
              </div>
              <div className={classes.mobileCardRow}>
                <h3 className={classes.mobileCardHeader}>Status</h3>
                <p className={classes.mobileCardText}>{loa.status}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className={classes.loaStatusContainer}>
      <div className={classes.row}>
        <h3 className={`${classes.cellReason} ${classes.cellHeading}`}>
          Reason
        </h3>
        <h3 className={classes.cellHeading}>From </h3>
        <h3 className={classes.cellHeading}>To</h3>
        <h3 className={classes.cellHeading}>Status</h3>
      </div>
      {data.map(loa => {
        return (
          <div className={classes.row} key={loa.id}>
            <p className={`${classes.cellReason} ${classes.cell}`}>
              {loa.reason}
            </p>
            <p className={classes.cell}>{loa.to}</p>
            <p className={classes.cell}>{loa.from}</p>
            <p className={classes.cell}>{loa.status}</p>
          </div>
        );
      })}
    </div>
  );
};

LeaveOfAbsenceData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeaveOfAbsenceData);
