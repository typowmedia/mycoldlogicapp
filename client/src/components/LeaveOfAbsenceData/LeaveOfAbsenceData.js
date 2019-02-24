import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import NothingFoundScreen from '../UI/NothingFoundScreen';
import MobileCard from '../MobileCard';

const LeaveOfAbsenceData = ({ classes, mobile, data }) => {
  if (data.length < 1)
    return <NothingFoundScreen messageTop="No current requests to show"/>;
  if (mobile) {
    return (
      <div className={classes.mobileLoaContainer}>
        {data.map(loa => {
          return <MobileCard loa={loa} key={loa.id} />;
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
            <p className={classes.cell}>{loa.from}</p>
            <p className={classes.cell}>{loa.to}</p>
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
