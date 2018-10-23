import React from 'react';
import styles from './styles';
import { withStyles, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const NavCard = ({ classes, nav, history }) => {
  return (
    <div className={classes.navCard} onClick={() => history.push(nav.route)}>
      <figure className={classes.navCardImage}>{nav.icon}</figure>

      <div className={classes.navCardTextContainer}>
        <h2 className={classes.navCardTitleText}>{nav.name}</h2>
        <p className={classes.navCardDescriptionText}>{nav.description}</p>
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(NavCard));
