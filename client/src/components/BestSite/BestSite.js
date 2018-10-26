import React, { Fragment } from 'react';
import { withStyles, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';
import BestSiteForm from '../Forms/BestSiteForm';
import Spinner from '../UI/Spinner';
import ReportSuccess from '../ReportSuccess';

const BestSite = ({ step, classes, nextStep, submitReport, loading }) => {
  let content;
  switch (step) {
    case 1:
      content = (
        <Fragment>
          <div className={classes.contentStepOneContainer}>
            <p className={classes.contentStepOneText}>
              We would like to recognize and share your suggestions that improve
              our organization.
            </p>
            <p className={classes.contentStepOneText}>
              Please note that your user's full name will be taken so that we
              can acknowledge you and include you in discussions of your great
              idea!
            </p>
          </div>
          <Button
            variant="extendedFab"
            className={classes.bestSiteButton}
            color="secondary"
            onClick={() => nextStep.forward()}
          >
            Start My Suggestion
          </Button>
        </Fragment>
      );

      break;
    case 2:
      content = <BestSiteForm submitReport={submitReport} />;

      break;

    default:
      content = (
        <ReportSuccess leftBtnTitle="New Report" leftBtnClick={nextStep.back} />
      );
      break;
  }
  return loading ? (
    <Spinner size={40} color="secondary" />
  ) : (
    <div className={classes.bestSiteContentContainer}>{content}</div>
  );
};

BestSite.propTypes = {
  step: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.objectOf(PropTypes.func.isRequired),
  submitReport: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default withStyles(styles)(BestSite);
