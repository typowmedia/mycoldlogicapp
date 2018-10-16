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
import styles from './styles';
import Spinner from '../../components/UI/Spinner';
import { UserContext } from '../../context/UserProvider';
import PropTypes from 'prop-types';

class AccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  _onSubmit(values, login) {
    //this.setState({ loading: true });
    login(values);
  }
  _validate() {}
  render() {
    const { classes } = this.props;
    const { loading } = this.state;
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
              }) => {
                console.log(submitting);
                return (
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
                        {loading ? (
                          <Spinner size={30} color="secondary" />
                        ) : (
                          <Button
                            type="submit"
                            className={classes.formButton}
                            variant="contained"
                            size="large"
                            color="secondary"
                            disabled={pristine || invalid || loading}
                          >
                            Continue
                          </Button>
                        )}
                      </Grid>
                    </FormControl>
                  </form>
                );
              }}
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
