import React, { Component } from 'react';
import {
  Input,
  InputLabel,
  Button,
  withStyles,
  FormControl,
  Grid,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from '../../components/Forms/RequestPasswordForm/styles';
import Spinner from '../../components/UI/Spinner';
import PropTypes from 'prop-types';

class RequestPasswordForm extends Component {
  _onSubmit = values => {
    //sendValues
    this.props.requestSuccess();
  };
  _validate = () => {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.form}>
        <Form
          onSubmit={this._onSubmit}
          validate={this._validate}
          render={({ handleSubmit, invalid, submitting, form, pristine }) => (
            <form onSubmit={handleSubmit} className={classes.accountForm}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="email">Pin</InputLabel>
                <Field name="pin">
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
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
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
                      Request a password
                    </Button>
                  )}
                </Grid>
              </FormControl>
            </form>
          )}
        />
      </div>
    );
  }
}

RequestPasswordForm.propTypes = {
  classes: PropTypes.object.isRequired,
  requestSuccess: PropTypes.func.isRequired,
};
export default withStyles(styles)(RequestPasswordForm);
