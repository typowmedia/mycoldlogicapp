import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles';
import PropTypes from 'prop-types';

const SiteReportWelcomeScreen = ({
  classes,
  clicked,
  firstParagraph,
  secondParagraph,
  buttonText,
}) => (
  <div className={classes.SiteReportWelcomeScreen}>
    <div className={classes.SiteReportWelcomeScreenTextContainer}>
      <p className={classes.SiteReportWelcomeScreenText}>{firstParagraph}</p>
      <p className={classes.SiteReportWelcomeScreenText}>{secondParagraph}</p>
    </div>
    <Button
      variant="extendedFab"
      className={classes.SiteReportWelcomeScreenButton}
      color="secondary"
      onClick={clicked}
    >
      {buttonText}
    </Button>
  </div>
);

SiteReportWelcomeScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired,
  firstParagraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default withStyles(styles)(SiteReportWelcomeScreen);
