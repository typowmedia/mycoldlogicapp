import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const MobileCard = ({ loa, classes }) => {
  return (
    <div className={classes.mobileCard}>
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
};

export default withStyles(styles)(MobileCard);
