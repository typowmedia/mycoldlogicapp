import React, { Component, Fragment } from 'react';
import {
  InputLabel,
  withStyles,
  FormControl,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  Input,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';
import { maxCharLength } from '../../../lib/maxCharLength';
import { formatLeaveOfAbsence } from '../../../lib/formatReport';
import { submitReport } from '../../../lib/submitReport';
import { COLDLOGIC_TOKEN } from '../../../config/tokens';
import FormControls from '../FormControls';
import DatePicker from 'react-datepicker';
import moment from 'moment';

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
    const today = new Date().setHours(0, 0, 0, 0);
    const from = new Date(values.from).setHours(0, 0, 0, 0);
    const to = new Date(values.to).setHours(0, 0, 0, 0);

    console.log(today, to, from);
    let errors = {};

    if (!values.from) errors.from = 'Please choose when to start your leave.';
    if (from) {
      if (from < today)
        errors.from = 'Please select a date that has not already passed';
      if (from > to)
        errors.from = 'The date chosen happens after your return date.';
    }
    if (!values.to) errors.to = 'Please choose when to end your leave.';
    if (to) {
      if (to < today)
        errors.to = 'Please select a date that has not already passed';
      if (to < from)
        errors.to = 'The date chosen happens before your leave starts.';
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
              <span>From:</span>
              <Field name="from">
                {({ input, meta }) => (
                  <DatePicker
                    className={classes.datePicker}
                    selected={input.value}
                    selectsStart
                    startDate={values.from}
                    endDate={values.to}
                    onChange={input.onChange}
                    withPortal
                    allowSameDay
                    placeholderText="Select a start date"
                  />
                )}
              </Field>
              <span>To:</span>
              <Field name="to">
                {({ input, meta }) => (
                  <DatePicker
                    className={classes.datePicker}
                    selected={input.value}
                    selectsEnd
                    startDate={values.from}
                    endDate={values.to}
                    onChange={input.onChange}
                    withPortal
                    allowSameDay
                    placeholderText="Select an end date"
                  />
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
