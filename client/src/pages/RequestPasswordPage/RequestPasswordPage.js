import React, { Component } from 'react';
import { Grid, withStyles, Typography } from '@material-ui/core';
import ColdLogic from '../../assets/ColdLogicLogo';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles';
import { HOME } from '../../routes/routes';
import Button from '@material-ui/core/Button';

class RequestPasswordPage extends Component {
  render() {
    const { classes, history } = this.props;
    return (
      <Grid container className={classes.requestContainer} justify="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          className={classes.requestContainerItem}
        >
          <ColdLogic color="#0D3C55" />
          <Typography variant="h4" color="primary" className={classes.message}>
            Please contact your direct supervisor for instructions on how to
            reset your password.
          </Typography>
          <div className={classes.requestButtonContainer}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push(HOME)}
              className={classes.requestButton}
            >
              Back to Login Page
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

RequestPasswordPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(RequestPasswordPage));
