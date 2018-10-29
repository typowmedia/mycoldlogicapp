import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';
import FormControls from '../FormControls';
import DateButton from '../DateButton';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { validate } from './helpers';

class SafeSiteForm extends Component {
  render() {
    const { classes, submitReport, loading, error, resetError } = this.props;
    return (
      <Form
        onSubmit={values => submitReport(values)}
        validate={values => validate(values)}
        render={({ handleSubmit, invalid, pristine }) => (
          <form onSubmit={handleSubmit} className={classes.safeSiteForm}>
            <FormControl fullWidth required className={classes.formControl}>
              <Field name="date">
                {({ input, meta }) => {
                  let error = '';
                  if (!pristine && meta.error) error = classes.errorMessage;
                  return (
                    <div className={classes.datePickerContainer}>
                      <span className={`${classes.dateLabel} ${error}`}>
                        Date of Incident
                        <span>&nbsp;*</span>
                      </span>
                      <DatePicker
                        customInput={
                          <DateButton
                            placeHolder={'Select Incident Date'}
                            pristine={meta.pristine}
                          />
                        }
                        openToDate={moment()}
                        selected={
                          meta.pristine ? moment() : moment(input.value)
                        }
                        onChange={input.onChange}
                        withPortal
                        allowSameDay
                        dateFormat="MMMM DD YYYY"
                        required
                      />
                    </div>
                  );
                }}
              </Field>
            </FormControl>
            <FormControl required className={classes.whereContainer}>
              <Field name="where">
                {({ input, meta }) => (
                  <TextField
                    error={pristine ? false : meta.error ? true : false}
                    id="where"
                    {...input}
                    autoComplete="off"
                    label="Place of Incident"
                    required
                    InputLabelProps={{
                      className: classes.safeSiteLabel,
                    }}
                    inputProps={{
                      className: classes.safeSiteInput,
                    }}
                  />
                )}
              </Field>
            </FormControl>

            <FormControl required className={classes.messageContainer}>
              <Field name="message">
                {({ input, meta }) => (
                  <TextField
                    error={pristine ? false : meta.error ? true : false}
                    id="message"
                    {...input}
                    label="Important details of the incident"
                    required
                    autoComplete="off"
                    multiline
                    rows="6"
                    InputLabelProps={{
                      className: classes.safeSiteLabel,
                    }}
                    inputProps={{
                      className: classes.safeSiteInput,
                    }}
                  />
                )}
              </Field>
            </FormControl>

            <FormControl className={classes.formButtonContainer}>
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
