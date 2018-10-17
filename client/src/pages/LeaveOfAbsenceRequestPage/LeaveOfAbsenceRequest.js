import React, { Component, Fragment } from 'react';
import {
  InputLabel,
  Button,
  withStyles,
  FormControl,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';
import Spinner from '../../components/UI/Spinner';
import { maxCharLength } from '../../lib/maxCharLength';

class LeaveOfAbsenceRequest extends Component {
  _onSubmit = values => {
    //sendValues
    console.log(values);
  };
  _validate = () => {};

  render() {
    const { classes, reasons } = this.props;
    return (
      <div className={classes.form}>
        <Form
          onSubmit={this._onSubmit}
          validate={this._validate}
          render={({
            handleSubmit,
            invalid,
            submitting,
            form,
            pristine,
            values,
          }) => (
            <form onSubmit={handleSubmit} className={classes.accountForm}>
              <FormControl className={classes.formControl}>
                <div className={classes.dateContainer}>
                  <Typography>From:</Typography>
                  <Field name="from">
                    {({ input, meta }) => (
                      <TextField
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
                          <MenuItem key={reason.id} value={reason.name}>
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
                      Submit
                    </Button>
                  )}
                </Grid>
              </FormControl>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </div>
    );
  }
}

LeaveOfAbsenceRequest.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LeaveOfAbsenceRequest);
