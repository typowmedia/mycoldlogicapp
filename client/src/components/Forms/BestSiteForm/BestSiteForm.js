import React, { Component, Fragment } from 'react';
import Spinner from '../../UI/Spinner';
import {
  withStyles,
  FormControl,
  InputLabel,
  Checkbox,
  TextField,
  Typography,
  Grid,
  Button,
  Chip,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';

const checkboxes = [
  'Make work more fun or interesting',
  'Improve safe operations',
  'Make the job easier',
  'Make people feel more appreciated',
  'Make people want to work for us for a long time',
  'Save the company money',
  'Keep the equipment in better condition',
  'Improve accurate order selection and/or deliver to Sobeys',
  'Other',
];

class BestSiteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      other: false,
      otherReason: null,
      loading: false,
      error: false,
    };
  }
  _otherReason = values => {
    if (values.reasons) {
      if (values.reasons.includes('Other')) {
        return (
          <FormControl
            fullWidth
            required
            className={this.props.classes.formControl}
          >
            <Field name="other">
              {({ input, meta }) => (
                <TextField
                  id="other"
                  {...input}
                  label="Please specify"
                  required
                  autoComplete="off"
                />
              )}
            </Field>
          </FormControl>
        );
      } else {
        values.other = '';
      }
    }
    return null;
  };

  _onSubmit = async values => {
    this.setState({ loading: true });
    const success = await this.props.submitReport(values);
    if (success.status === 201) {
      this.setState({ loading: false });
    } else this.setState({ loading: false, error: true });
  };

  _validate = values => {
    let errors = {};
    if (!values.suggestion) errors.suggestion = 'Please enter a suggestion.';
    if (!values.details)
      errors.details = 'Please explain some details of your suggestion.';
    if (!values.reasons)
      errors.reasons = 'Please select a minimum of one reason.';
    if (values.reasons) {
      if (values.reasons.length < 1)
        errors.reasons = 'Please select a minimum of one reason.';
      if (values.reasons.find(reason => reason === 'Other')) {
        if (!values.other) errors.other = 'Please specify';
      }
    }
    return errors;
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.form}>
        <Form
          onSubmit={this._onSubmit}
          validate={this._validate}
          render={({ handleSubmit, invalid, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} className={classes.accountForm}>
              <FormControl fullWidth required className={classes.formControl}>
                <Field name="suggestion">
                  {({ input, meta }) => (
                    <TextField
                      id="suggestion"
                      {...input}
                      label="My Suggestion is:"
                      required
                      autoComplete="off"
                      multiline
                      rows="4"
                    />
                  )}
                </Field>
              </FormControl>
              <FormControl fullWidth required className={classes.formControl}>
                <Field name="details">
                  {({ input, meta }) => (
                    <TextField
                      id="details"
                      {...input}
                      label="This will make Cold Logic the best site by:"
                      required
                      autoComplete="off"
                      multiline
                      rows="4"
                    />
                  )}
                </Field>
              </FormControl>
              <div>
                <Typography>
                  This has the potential to improve ColdLogic by:
                </Typography>
                <Grid container spacing={0}>
                  {checkboxes.map((checkbox, i) => (
                    <Grid
                      item
                      xs={12}
                      key={i}
                      className={classes.checkboxContainer}
                    >
                      <Field name="reasons" type="checkbox" value={checkbox}>
                        {({ input, meta }) => {
                          return (
                            <InputLabel shrink>
                              <Checkbox {...input} />
                              {checkbox}
                            </InputLabel>
                          );
                        }}
                      </Field>
                    </Grid>
                  ))}
                </Grid>
              </div>
              {this._otherReason(values)}
              <FormControl fullWidth className={classes.formControl}>
                <div className={classes.buttons}>
                  {this.state.loading ? (
                    <div>
                      <Spinner size={30} color="secondary" />
                    </div>
                  ) : (
                    <Fragment>
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

BestSiteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  submitReport: PropTypes.func.isRequired,
};

export default withStyles(styles)(BestSiteForm);
