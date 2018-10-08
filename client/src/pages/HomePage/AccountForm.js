import React, { Component } from 'react';
import {
  Input,
  InputLabel,
  Typography,
  Button,
  withStyles,
  FormControl,
  Grid,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from '../../components/Forms/AccountForm/styles';
import Spinner from '../../components/UI/Spinner';
import { UserContext } from '../../context/UserProvider';
import PropTypes from 'prop-types';

// const user = {
//   id: 1,
//   empNum: '850001',
//   isEmployed: true,
//   isAccountEnabled: true,
//   loginStatusId: 1,
//   loginStatus: null,
//   firstName: 'Nazif',
//   lastName: 'Everson',
//   secret: '850001',
//   loginFailCnt: 0,
//   lastFailDtm: '2018-01-01T00:00:00',
//   lastLoginDtm: '2018-01-01T00:00:00',
//   lastPwdSetDtm: '2018-01-01T00:00:00',
//   epIncentives: null,
//   associateJobBids: null,
//   supervisorJobBids: null,
//   leaveAbses: null,
//   timeOffs: null,
//   notices: null,
//   recepientNotices: null,
//   senderNotices: null
// }

class AccountForm extends Component {
  _onSubmit(values, login) {
    // make login request and await response
    //then log user in
    login(values); // to be the response from api call
  }
  _validate() {}
  render() {
    const { classes } = this.props;
    return (
      <UserContext.Consumer>
        {({ login }) => (
          <div className={classes.form}>
            <Form
              onSubmit={values => this._onSubmit(values, login)}
              validate={this._validate}
              render={({
                handleSubmit,
                invalid,
                submitting,
                form,
                pristine,
              }) => (
                <form onSubmit={handleSubmit} className={classes.accountForm}>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="pin">Pin</InputLabel>
                    <Field name="userName">
                      {({ input, meta }) => (
                        <Input
                          id="pin"
                          type="text"
                          inputProps={{
                            autoComplete: 'off',
                          }}
                          {...input}
                        />
                      )}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Field name="password">
                      {({ input, meta }) => (
                        <Input
                          id="password"
                          type="password"
                          inputProps={{
                            autoComplete: 'off',
                          }}
                          {...input}
                        />
                      )}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Typography>
                        <button
                          className={classes.formToggle}
                          type="button"
                          onClick={() => {
                            form.reset();
                            this.props.history.push('/request-password');
                          }}
                        >
                          Request a password
                        </button>
                      </Typography>
                      {submitting ? (
                        <Spinner size={30} color="secondary" />
                      ) : (
                        <Button
                          type="submit"
                          className={classes.formButton}
                          variant="contained"
                          size="large"
                          color="secondary"
                          disabled={pristine || invalid || submitting}
                        >
                          Continue
                        </Button>
                      )}
                    </Grid>
                  </FormControl>
                </form>
              )}
            />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

AccountForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AccountForm);
