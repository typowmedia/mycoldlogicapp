import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styles from './styles';
import SafeSiteForm from './SafeSiteForm';
import Spinner from '../../components/UI/Spinner';
import ReportSuccess from '../../components/ReportSuccess';

const SafeSite = ({ step, classes, nextStep, submitReport, loading }) => {
  let content;
  switch (step) {
    case 1:
      content = (
        <Fragment>
          <Typography>
            It's our responsibility to report any concern about safety, this
            helps us to keep our facilities safe and our work free of concerns
          </Typography>
          <Button
            variant="extendedFab"
            className={classes.button}
            color="secondary"
            onClick={() => nextStep.forward()}
          >
            Start My Report
          </Button>
        </Fragment>
      );

      break;
    case 2:
      content = <SafeSiteForm submitReport={submitReport} />;

      break;

    default:
      content = (
        <ReportSuccess
          leftButtonTitle="Exit Coldlogic Portal"
          leftButtonClick={() => {}}
          message="Thank you for helping us keep our work safe for everyone and
      creating this report thru Your ColdLogic portal. This report will
      be carefully investigated."
        />
      );
      break;
  }
  return loading ? <Spinner size={40} color="secondary" /> : content;
};

SafeSite.propTypes = {
  step: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.objectOf(PropTypes.func.isRequired),
  submitReport: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default withStyles(styles)(SafeSite);
