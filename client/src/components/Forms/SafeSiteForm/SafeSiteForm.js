import React, { Component } from 'react';

import {
  withStyles,
  FormControl,
  Typography,
  TextField,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';
import FormControls from '../FormControls';

class SafeSiteForm extends Component {
  constructor(props) {
    super(props);
  }

  _validate = values => {
    let errors = {};
    if (!values.date)
      errors.date = 'Please select the date the incident occurred.';
    if (!values.where)
      errors.where = 'Please specify where the incident occurred.';
    if (!values.message)
      errors.date = 'Please explain some of the details of the incident.';

    return errors;
  };
  render() {
    const { classes, submitReport, loading, error, resetError } = this.props;
    return (
      <div className={classes.form}>
        <Form
          onSubmit={values => submitReport(values)}
          validate={this._validate}
          render={({ handleSubmit, invalid, submitting, pristine }) => (
            <form onSubmit={handleSubmit} className={classes.accountForm}>
              <FormControl fullWidth required className={classes.formControl}>
                <Typography>Date of Incident:</Typography>
                <Field name="date">
                  {({ input, meta }) => (
                    <TextField
                      id="date"
                      type="date"
                      {...input}
                      autoComplete="off"
                    />
                  )}
                </Field>
              </FormControl>
              <FormControl fullWidth required className={classes.formControl}>
                <Field name="where">
                  {({ input, meta }) => (
                    <TextField
                      id="where"
                      {...input}
                      autoComplete="off"
                      label="Place of Incident"
                      required
                    />
                  )}
                </Field>
              </FormControl>
              <FormControl fullWidth required className={classes.formControl}>
                <Field name="message">
                  {({ input, meta }) => (
                    <TextField
                      id="message"
                      {...input}
                      label="Important details of the incident"
                      required
                      autoComplete="off"
                      multiline
                      rows="4"
                    />
                  )}
                </Field>
              </FormControl>

              <FormControl fullWidth className={classes.formControl}>
                <FormControls
                  loading={loading}
                  error={error}
                  errorClicked={() => resetError()}
                  invalid={invalid}
                  pristine={pristine}
                />
              </FormControl>
            </form>
          )}
        />
      </div>
    );
  }
}

SafeSiteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  submitReport: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorReset: PropTypes.func.isRequired,
};

export default withStyles(styles)(SafeSiteForm);
