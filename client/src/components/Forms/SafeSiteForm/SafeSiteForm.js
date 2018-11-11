import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
    const {
      classes,
      submitReport,
      loading,
      error,
      resetError,
      distCenters,
    } = this.props;

    return (
      <Form
        onSubmit={values => submitReport(values)}
        validate={values => validate(values)}
        initialValues={{ anon: false }}
        render={({ handleSubmit, invalid, pristine }) => (
          <form onSubmit={handleSubmit} className={classes.safeSiteForm}>
            <div className={classes.safeSiteDateContainer}>
              <Field name="date">
                {({ input, meta }) => {
                  let error = '';
                  if (pristine ? false : meta.error ? meta.error : false)
                    error = classes.errorMessage;
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
                        className={classes.time}
                      />
                    </div>
                  );
                }}
              </Field>
              <Field name="time">
                {({ input, meta }) => {
                  let error = '';
                  if (pristine ? false : meta.error ? meta.error : false)
                    error = classes.errorMessage;
                  return (
                    <div className={classes.datePickerContainer}>
                      <span className={`${classes.dateLabel} ${error}`}>
                        Time of Incident
                        <span>&nbsp;*</span>
                      </span>
                      <DatePicker
                        customInput={
                          <DateButton
                            placeHolder={'Select Time Of Incident'}
                            pristine={meta.pristine}
                          />
                        }
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="LT"
                        timeCaption="Time"
                        selected={
                          meta.pristine ? moment() : moment(input.value)
                        }
                        onChange={input.onChange}
                        withPortal
                        required
                      />
                    </div>
                  );
                }}
              </Field>
            </div>
            <FormControl required className={classes.locationContainer}>
              <Field name="location">
                {({ input, meta }) => (
                  <Fragment>
                    <InputLabel
                      htmlFor="manager"
                      error={pristine ? false : meta.error ? true : false}
                      className={classes.safeSiteLabel}
                    >
                      Location of Incident
                    </InputLabel>
                    <Select
                      error={pristine ? false : meta.error ? true : false}
                      id="manager"
                      value={input.value}
                      {...input}
                      name="manager"
                    >
                      <MenuItem value="" className={classes.safeSiteInput}>
                        <em>None</em>
                      </MenuItem>
                      {distCenters.map(center => (
                        <MenuItem
                          className={classes.safeSiteInput}
                          key={center.id}
                          value={center.location}
                        >
                          {center.location}
                        </MenuItem>
                      ))}
                    </Select>
                  </Fragment>
                )}
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
            <div className={classes.safeSiteAnonContainer}>
              <Field name="anon" type="checkbox">
                {({ input, meta }) => {
                  return (
                    <Fragment>
                      <Checkbox
                        value={input.value ? 'true' : 'false'}
                        onChange={event => {
                          input.onChange(!input.value);
                        }}
                        id={`anon`}
                        classes={{ root: classes.safeSiteCheckbox }}
                      />
                      <InputLabel
                        htmlFor={`anon`}
                        className={classes.safeSiteCheckboxInputLabel}
                      >
                        send report anonymously
                      </InputLabel>
                    </Fragment>
                  );
                }}
              </Field>
            </div>
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
