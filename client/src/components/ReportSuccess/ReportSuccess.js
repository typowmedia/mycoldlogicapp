import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { DASHBOARD } from '../../routes/routes';

const ReportSuccess = ({
  classes,
  leftBtnClick,
  leftBtnTitle,
  history,
  message,
}) => (
  <Grid container>
    <Grid item xs={12}>
      <p className={classes.reportMessage}>{message}</p>
    </Grid>
    <Grid item xs={12}>
      <div className={classes.reportButtons}>
        <Button
          variant="extendedFab"
          className={classes.reportButton}
          color="primary"
          onClick={leftBtnClick}
        >
          {leftBtnTitle}
        </Button>
        <Button
          variant="extendedFab"
          className={classes.reportButton}
          color="secondary"
          onClick={() => history.push(DASHBOARD)}
        >
          Back To DashBoard
        </Button>
      </div>
    </Grid>
  </Grid>
);

ReportSuccess.propTypes = {
  classes: PropTypes.object.isRequired,
  leftBtnTitle: PropTypes.string,
  leftBtnClick: PropTypes.func,
  history: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};

export default withRouter(withStyles(styles)(ReportSuccess));
