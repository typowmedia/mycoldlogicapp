import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles';

const BestSiteWelcome = ({ classes, clicked }) => (
  <div className={classes.bestSiteWelcome}>
    <div className={classes.bestSiteWelcomeTextContainer}>
      <p className={classes.bestSiteWelcomeText}>
        We would like to recognize and share your suggestions that improve our
        organization.
      </p>
      <p className={classes.bestSiteWelcomeText}>
        Please note that your user's full name will be taken so that we can
        acknowledge you and include you in discussions of your great idea!
      </p>
    </div>
    <Button
      variant="extendedFab"
      className={classes.bestSiteWelcomeButton}
      color="secondary"
      onClick={clicked}
    >
      Start My Suggestion
    </Button>
  </div>
);

export default withStyles(styles)(BestSiteWelcome);
