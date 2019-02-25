import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
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
    <Fab
      variant="extended"
      className={classes.SiteReportWelcomeScreenButton}
      color="secondary"
      onClick={clicked}
    >
      {buttonText}
    </Fab>
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
