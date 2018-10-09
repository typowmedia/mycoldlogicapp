import React, { Component } from 'react';
import { Grid, withStyles, Typography } from '@material-ui/core';
import RequestPassword from './RequestPassword';
import ColdLogic from '../../assets/ColdLogicLogo';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles';

class RequestPasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestSent: false,
    };
  }

  requestSuccessful = () => {
    this.setState({ requestSent: true }, () => {
      setTimeout(() => {
        this.props.history.push('/');
      }, 3000);
    });
  };
  render() {
    const { classes, history } = this.props;
    const { requestSent } = this.state;
    return (
      <Grid container className={classes.root} justify="center">
        <Grid item xs={12} sm={12} md={6}>
          <ColdLogic color="#0D3C55" />
          {requestSent ? (
            <Typography variant="display1" className={classes.message}>
              Thank you for using your ColdLogic employee portal. Your manager
              will get in contact with a password soon!
            </Typography>
          ) : (
            <RequestPassword
              history={history}
              requestSuccess={this.requestSuccessful}
            />
          )}
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
