import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinner';
import {
  withStyles,
  FormControl,
  InputLabel,
  Checkbox,
  TextField,
  Typography,
  Grid,
  Button,
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
      }
    }
    return null;
  };

  _onSubmit = values => {
    this.props.submitReport(values);
  };
  _validate = values => {};
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

BestSiteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  submitReport: PropTypes.func.isRequired,
};

export default withStyles(styles)(BestSiteForm);
