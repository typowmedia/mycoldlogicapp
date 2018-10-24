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
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';
import { maxCharLength } from '../../../lib/maxCharLength';
import { formatLeaveOfAbsence } from '../../../lib/formatReport';
import { submitReport } from '../../../lib/submitReport';
import { COLDLOGIC_TOKEN } from '../../../config/tokens';
import FormControls from '../FormControls';

class LoaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      success: false,
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
          <form onSubmit={handleSubmit} className={classes.accountForm}>
            <FormControl className={classes.formControl}>
              <div className={classes.dateContainer}>
                <Typography>From:</Typography>
                <Field name="from">
                  {({ input, meta }) => (
                    <TextField
                      error={pristine ? false : typeof meta.error === 'string'}
                      id="from"
                      type="date"
                      {...input}
                      autoComplete="off"
                    />
                  )}
                </Field>
                <Typography>To:</Typography>
                <Field name="to">
                  {({ input, meta }) => (
                    <TextField
                      error={pristine ? false : typeof meta.error === 'string'}
                      id="to"
                      type="date"
                      {...input}
                      autoComplete="off"
                    />
                  )}
                </Field>
              </div>
            </FormControl>
            <FormControl required className={classes.formControl}>
              <Field name="reason">
                {({ input, meta }) => (
                  <Fragment>
                    <InputLabel htmlFor="reasom">
                      Please Select a Reason
                    </InputLabel>
                    <Select
                      id="reason"
                      value={input.value}
                      {...input}
                      name="Reason"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {reasons.map(reason => (
                        <MenuItem key={reason.id} value={reason.id}>
                          {reason.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Required</FormHelperText>
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
                    label="Reason Details"
                    required
                    autoComplete="off"
                    multiline
                    rows="4"
                  />
                )}
              </Field>
              <FormHelperText>Required</FormHelperText>
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
