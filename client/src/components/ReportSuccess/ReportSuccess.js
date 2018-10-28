import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import { UserContext } from '../../context/UserProvider';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { DASHBOARD } from '../../routes/routes';

const ReportSuccess = ({
  classes,
  safesite,
  leftBtnClick,
  leftBtnTitle,
  history,
  message,
}) => {
  return (
    <UserContext.Consumer>
      {({ logout }) => {
        return (
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
      }}
    </UserContext.Consumer>
  );
};

ReportSuccess.propTypes = {
  classes: PropTypes.object.isRequired,
  safesite: PropTypes.bool,
  leftBtnTitle: PropTypes.string,
  leftBtnClick: PropTypes.func,
  history: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};

export default withRouter(withStyles(styles)(ReportSuccess));
