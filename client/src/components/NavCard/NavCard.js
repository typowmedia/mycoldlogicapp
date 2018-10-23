import React from 'react';
import styles from './styles';
import { withStyles, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const NavCard = ({ classes, nav, history }) => {
  return (
    <div className={classes.navCard} onClick={() => history.push(nav.route)}>
      <div className={classes.navCardFlexItemOne}>
        <div className={classes.navCardImage}>{nav.icon}</div>
      </div>
      <div className={classes.navCardFlexItemTwo}>
        <div className={classes.navCardTitle}>
          <Typography
            align="center"
            variant="display3"
            component="h1"
            className={classes.navCardTitleText}
          >
            {nav.name}
          </Typography>
        </div>
        <div className={classes.navCardDescription}>
          <Typography
            align="center"
            variant="display3"
            component="p"
            className={classes.navCardDescriptionText}
          >
            {nav.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(NavCard));
