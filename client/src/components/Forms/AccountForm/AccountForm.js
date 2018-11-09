import React, { Component, Fragment } from 'react';
import {
  Input,
  InputLabel,
  Typography,
  Button,
  withStyles,
  FormControl,
  Fade,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import Spinner from '../../UI/Spinner';
import { UserContext } from '../../../context/UserProvider';
import PropTypes from 'prop-types';

class AccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
    };
  }

  _onSubmit = async (values, login) => {
    this.setState({ loading: true });
    const success = await login(values);
    if (!success) {
      this.setState({ loading: false, error: true });
    }
  };

  _validate(values) {
    const NumberRegex = /\D/g;
    let errors = {};
    const pin = values.userName;
    if (pin) {
      if (NumberRegex.test(pin)) {
        errors.userName = 'must enter a valid pin number';
      }
    }
    return errors;
  }

  render() {
    const { classes } = this.props;
    const { loading } = this.state;
    return (
      <UserContext.Consumer>
        {({ login }) => (
          <Form
            className={classes.formContainer}
            onSubmit={values => this._onSubmit(values, login)}
            validate={values => this._validate(values)}
            render={({ handleSubmit, invalid, form, pristine }) => {
              return (
                <form onSubmit={handleSubmit} className={classes.form}>
                  <FormControl fullWidth className={classes.formControl}>
                    <Field name="userName">
                      {({ input, meta }) => (
                        <Fragment>
                          <InputLabel
                            htmlFor="pin"
                            className={meta.error ? classes.error : ``}
                          >
                            {meta.error ? `${meta.error}` : 'Employee ID'}
                          </InputLabel>
                          <Input
                            error={typeof meta.error === 'string'}
                            label={meta.error}
                            id="pin"
                            type="text"
                            inputProps={{
                              autoComplete: 'off',
                            }}
                            {...input}
                            onChange={event => {
                              if (this.state.error) {
                                this.setState({ error: false });
                              }
                              input.onChange(event.target.value);
                            }}
                          />
                        </Fragment>
                      )}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <Field name="password">
                      {({ input, meta }) => (
                        <Fragment>
                          <InputLabel htmlFor="password">Password</InputLabel>
                          <Input
                            id="password"
                            type="password"
                            inputProps={{
                              autoComplete: 'off',
                            }}
                            {...input}
                            onChange={event => {
                              if (this.state.error) {
                                this.setState({ error: false });
                              }
                              input.onChange(event.target.value);
                            }}
                          />
                        </Fragment>
                      )}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth className={classes.formControl}>
                    <div className={classes.buttons}>
                      <Typography>
                        <button
                          className={classes.inlineButton}
                          type="button"
                          onClick={() => {
                            form.reset();
                            this.props.history.push('/request-password');
                          }}
                        >
                          Request a password
                        </button>
                      </Typography>
                      {loading ? (
                        <div>
                          <Spinner size={30} color="secondary" />
                        </div>
                      ) : (
                        <Button
                          type="submit"
                          className={classes.formButton}
                          variant="contained"
                          size="medium"
                          color="secondary"
                          disabled={pristine || invalid || loading}
                        >
                          Continue
                        </Button>
                      )}
                    </div>
                    <Fade in={this.state.error}>
                      <div className={classes.errorContainer}>
                        <p className={classes.error}>
                          Pin/Password is incorrect. Please check that you have
                          not entered it incorrectly
                        </p>
                      </div>
                    </Fade>
                  </FormControl>
                </form>
              );
            }}
          />
        )}
      </UserContext.Consumer>
    );
  }
}

AccountForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AccountForm);
