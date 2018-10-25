import React, { Component, Fragment } from 'react';
import {
  InputLabel,
  withStyles,
  FormControl,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';
import { maxCharLength } from '../../../lib/maxCharLength';
import { checkDates } from '../../../lib/checkDates';
import { formatLeaveOfAbsence } from '../../../lib/formatReport';
import { submitReport } from '../../../lib/submitReport';
import { COLDLOGIC_TOKEN } from '../../../config/tokens';
import FormControls from '../FormControls';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DateButton from '../DateButton';

import 'react-datepicker/dist/react-datepicker.css';

class LoaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      success: false,

      startDate: moment(),
    };
  }

  _onSubmit = async (values, resetForm) => {
    const Token = await localStorage.getItem(COLDLOGIC_TOKEN);
    const report = await formatLeaveOfAbsence(values, this.props.user);
    const success = await submitReport(report, '/LeaveAbs', Token);
    if (success.status === 201) {
      this.setState({ loading: false, success: true });
      resetForm();
    } else this.setState({ loading: false, error: true });
  };
  _validate = values => {
    const from = new Date(values.from).setHours(0, 0, 0, 0);
    const to = new Date(values.to).setHours(0, 0, 0, 0);

    let errors = {};
    if (!values.from) errors.from = 'Please choose when to start your leave.';
    if (!values.to) errors.to = 'Please choose when to end your leave.';
    const dateCheck = checkDates(from, to);
    if (dateCheck !== true) {
      errors[dateCheck.error] = dateCheck.message;
    }
    if (!values.message) errors.message = 'Please enter some details.';
    if (!values.reason) errors.reason = 'Please select a reason.';

    return errors;
  };

  render() {
    const { classes, reasons } = this.props;
    const { loading, error, success } = this.state;

    return (
      <Form
        onSubmit={(values, form) => this._onSubmit(values, form.reset())}
        validate={this._validate}
        render={({ handleSubmit, invalid, form, pristine, values }) => (
          <form onSubmit={handleSubmit} className={classes.loaForm}>
            <div className={classes.dateContainer}>
              <Field name="from">
                {({ input, meta }) => (
                  <div className={classes.datePicker}>
                    <span className={classes.datePickerTitle}>From</span>
                    <DatePicker
                      customInput={
                        <DateButton
                          placeHolder={'Select a start date'}
                          error={
                            pristine ? false : meta.error ? meta.error : false
                          }
                        />
                      }
                      openToDate={moment()}
                      className={classes.datePicker}
                      selected={input.value}
                      selectsStart
                      startDate={values.from}
                      endDate={values.to}
                      onChange={input.onChange}
                      withPortal
                      allowSameDay
                      dateFormat="MMMM DD YYYY"
                      minDate={moment()}
                      showDisabledMonthNavigation
                      placeholderText="Select a start date"
                      required
                    />
                  </div>
                )}
              </Field>
              <Field name="to">
                {({ input, meta }) => (
                  <div className={classes.datePicker}>
                    <span className={classes.datePickerTitle}>To</span>
                    <DatePicker
                      customInput={
                        <DateButton
                          placeHolder={'Select an end date'}
                          error={
                            pristine ? false : meta.error ? meta.error : false
                          }
                        />
                      }
                      className={classes.datePicker}
                      selected={input.value}
                      selectsEnd
                      startDate={values.from}
                      endDate={values.to}
                      onChange={input.onChange}
                      withPortal
                      popperClassName={classes.popper}
                      allowSameDay
                      dateFormat="MMMM DD YYYY"
                      minDate={moment()}
                      showDisabledMonthNavigation
                      placeholderText="Select an end date"
                      required
                    />
                  </div>
                )}
              </Field>
            </div>
            <FormControl required className={classes.formControl}>
              <Field name="reason">
                {({ input, meta }) => (
                  <Fragment>
                    <InputLabel htmlFor="reason">
                      Please Select a Reason
                    </InputLabel>
                    <Select
                      id="reason"
                      value={input.value}
                      {...input}
                      name="Reason"
                    >
                      <MenuItem value="" className={classes.loaSelectItem}>
                        <em>None</em>
                      </MenuItem>
                      {reasons.map(reason => (
                        <MenuItem
                          key={reason.id}
                          value={reason.id}
                          className={classes.loaSelectItem}
                        >
                          {reason.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Fragment>
                )}
              </Field>
            </FormControl>
            <FormControl fullWidth required className={classes.formControl}>
              <Field name="message">
                {({ input, meta }) => (
                  <TextField
                    id="message"
                    {...input}
                    onChange={e => {
                      const value = maxCharLength(300, e.target.value);
                      input.onChange(value);
                    }}
                    InputLabelProps={{
                      className: classes.loaReasonInput,
                    }}
                    inputProps={{
                      className: classes.loaReasonInput,
                    }}
                    label="Reason Details"
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
                success={success}
                successClicked={() => this.setState({ success: false })}
                errorClicked={() => this.setState({ error: false })}
                invalid={invalid}
                pristine={pristine}
              />
            </FormControl>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    );
  }
}

LoaForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LoaForm);
