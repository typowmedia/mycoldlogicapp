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
import { formatLeaveOfAbsence } from '../../../lib/formatReport';
import { submitReport } from '../../../lib/submitReport';
import { COLDLOGIC_TOKEN } from '../../../config/tokens';
import FormControls from '../FormControls';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DateButton from '../DateButton';
import { validate } from './helpers';
import { withRouter } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import { REQUEST_TIME_OFF_2 } from '../../../routes/routes';

class LoaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
    };
  }

  _onSubmit = async (values, resetForm) => {
    const Token = await localStorage.getItem(COLDLOGIC_TOKEN);
    const report = await formatLeaveOfAbsence(values, this.props.user);

    const success = await submitReport(report, '/LeaveAbs', Token);
    if (success.status === 201) {
      this.setState({ loading: false });
      resetForm();
      this.props.history.push(REQUEST_TIME_OFF_2);
    } else this.setState({ loading: false, error: true });
  };

  render() {
    const { classes, reasons } = this.props;
    const { loading, error, success } = this.state;

    return (
      <Form
        onSubmit={(values, form) => this._onSubmit(values, () => form.reset())}
        validate={values => validate(values)}
        render={({ handleSubmit, invalid, form, pristine, values }) => (
          <form onSubmit={handleSubmit} className={classes.loaForm}>
            <div className={classes.dateContainer}>
              <Field name="from">
                {({ input, meta }) => {
                  let error = '';
                  if (pristine ? false : meta.error ? meta.error : false)
                    error = classes.errorMessage;
                  return (
                    <div className={classes.datePicker}>
                      <span className={`${classes.datePickerTitle} ${error}`}>
                        From*
                      </span>
                      <DatePicker
                        customInput={
                          <DateButton
                            placeHolder={'Select a start date'}
                            pristine={meta.pristine}
                          />
                        }
                        openToDate={moment()}
                        className={classes.datePicker}
                        selected={
                          meta.pristine ? moment() : moment(input.value)
                        }
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
                  );
                }}
              </Field>
              <Field name="to">
                {({ input, meta }) => {
                  let error = '';
                  if (pristine ? false : meta.error ? meta.error : false)
                    error = classes.errorMessage;
                  return (
                    <div className={classes.datePicker}>
                      <span className={`${classes.datePickerTitle} ${error}`}>
                        To*
                      </span>
                      <DatePicker
                        customInput={
                          <DateButton
                            placeHolder={'Select an end date'}
                            pristine={meta.pristine}
                          />
                        }
                        className={classes.datePicker}
                        selected={
                          meta.pristine ? moment() : moment(input.value)
                        }
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
                  );
                }}
              </Field>
            </div>
            <FormControl required className={classes.formControl}>
              <Field name="reason">
                {({ input, meta }) => (
                  <Fragment>
                    <InputLabel
                      htmlFor="reason"
                      error={pristine ? false : meta.error ? true : false}
                    >
                      Please Select a Reason
                    </InputLabel>
                    <Select
                      error={pristine ? false : meta.error ? true : false}
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
                    error={pristine ? false : meta.error ? true : false}
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
                errorClicked={() => this.setState({ error: false })}
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

LoaForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(LoaForm));
