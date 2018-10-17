import React, { Component, Fragment } from 'react';
import Spinner from '../../components/UI/Spinner';
import {
  withStyles,
  FormControl,
  Typography,
  TextField,
  Chip,
  Button,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';

class SafeSiteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
    };
  }

  _onSubmit = async values => {
    this.setState({ loading: true });
    const success = await this.props.submitReport(values);
    if (success.status === 201) {
      this.setState({ loading: false });
    } else this.setState({ loading: false, error: true });
  };

  _validate = values => {
    console.log(values);
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
    const { classes } = this.props;
    return (
      <div className={classes.form}>
        <Form
          onSubmit={this._onSubmit}
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
                <div className={classes.buttons}>
                  {this.state.loading ? (
                    <div>
                      <Spinner size={30} color="secondary" />
                    </div>
                  ) : (
                    <Fragment>
                      {this.state.success && (
                        <Chip
                          label="Message sent! Your manager will get back to you shortly."
                          onClick={() => {
                            this.setState({ success: false });
                          }}
                          onDelete={() => {
                            this.setState({ success: false });
                          }}
                          className={classes.chipSuccess}
                        />
                      )}
                      {this.state.error && (
                        <Chip
                          label="Oops something went wrong! Please try again later."
                          onClick={() => {
                            this.setState({ error: false });
                          }}
                          onDelete={() => {
                            this.setState({ error: false });
                          }}
                          className={classes.chipError}
                        />
                      )}
                      {this.state.error || this.state.success ? null : (
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
                    </Fragment>
                  )}
                </div>
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
};

export default withStyles(styles)(SafeSiteForm);
