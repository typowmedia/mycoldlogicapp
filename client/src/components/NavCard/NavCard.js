import React from 'react';
import styles from './styles';
import { withStyles, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const NavCard = ({ classes, nav, history }) => {
  return (
    <div className={classes.navCard} onClick={() => history.push(nav.route)}>
      <div className={classes.navCardImageContainer}>
        <figure className={classes.navCardImage}>{nav.icon}</figure>
      </div>

      <div className={classes.navCardTextContainer}>
        <Typography
          align="center"
          variant="display3"
          component="h1"
          className={classes.navCardTitleText}
        >
          {nav.name}
        </Typography>
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
  );
};

export default withRouter(withStyles(styles)(NavCard));
