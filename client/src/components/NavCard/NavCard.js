import React from 'react';
import styles from './styles';
import { withStyles, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const NavCard = ({ classes, nav, history }) => {
  return (
    <div className={classes.navCard} onClick={() => history.push(nav.route)}>
      <div className={classes.navCardImageContainer}>
        <div className={classes.navCardImage}>{nav.icon}</div>
      </div>
      <div className={classes.navCardTitle}>
        <Typography variant="headline" component="h3">
          {nav.name}
        </Typography>
      </div>
      <div className={classes.navCardDescription}>
        <Typography variant="headline" component="p">
          {nav.description}
        </Typography>
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(NavCard));
