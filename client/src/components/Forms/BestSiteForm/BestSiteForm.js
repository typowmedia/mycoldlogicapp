import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';
import FormControls from '../FormControls';
import { Grid } from '@material-ui/core';
import { validate } from './helpers';

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
                  inputProps={{
                    className: this.props.classes.bestSiteInput,
                  }}
                  InputLabelProps={{
                    className: this.props.classes.bestSiteInput,
                  }}
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

  render() {
    const { classes, loading, error, resetError, submitReport } = this.props;
    return (
      <Form
        onSubmit={values => submitReport(values)}
        validate={values => validate(values)}
        render={({ handleSubmit, invalid, pristine, values }) => (
          <form onSubmit={handleSubmit} className={classes.bestSiteForm}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                xl={8}
                className={classes.suggestionContainer}
              >
                <FormControl fullWidth required className={classes.formControl}>
                  <Field name="suggestion">
                    {({ input, meta }) => (
                      <TextField
                        error={pristine ? false : meta.error ? true : false}
                        id="suggestion"
                        {...input}
                        label="My Suggestion is:"
                        required
                        autoComplete="off"
                        multiline
                        rows="4"
                        inputProps={{
                          className: classes.bestSiteInput,
                        }}
                        InputLabelProps={{
                          className: classes.bestSiteInput,
                        }}
                      />
                    )}
                  </Field>
                </FormControl>
                <FormControl fullWidth required className={classes.formControl}>
                  <Field name="details">
                    {({ input, meta }) => (
                      <TextField
                        error={pristine ? false : meta.error ? true : false}
                        id="details"
                        {...input}
                        label="This will make ColdLogic the best site by:"
                        required
                        autoComplete="off"
                        multiline
                        rows="4"
                        inputProps={{
                          className: classes.bestSiteInput,
                        }}
                        InputLabelProps={{
                          className: classes.bestSiteInput,
                        }}
                      />
                    )}
                  </Field>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                xl={4}
                className={classes.suggestionContainer}
              >
                <div className={classes.suggestionCheckboxContainer}>
                  <h2 className={classes.suggestionCheckboxTitle}>
                    This has the potential to improve ColdLogic by:
                  </h2>
                  {checkboxes.map((checkbox, index) => (
                    <Field
                      name="reasons"
                      type="checkbox"
                      value={checkbox}
                      key={index}
                    >
                      {({ input, meta }) => {
                        return (
                          <div className={classes.bestSiteCheckboxContainer}>
                            <Checkbox
                              {...input}
                              id={`checkbox${index}`}
                              classes={{ root: classes.checkbox }}
                            />
                            <InputLabel
                              error={
                                pristine ? false : meta.error ? true : false
                              }
                              htmlFor={`checkbox${index}`}
                              className={classes.bestSiteCheckboxInputLabel}
                            >
                              {checkbox}
                            </InputLabel>
                          </div>
                        );
                      }}
                    </Field>
                  ))}
                  {this._otherReason(values)}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.bestSiteFormButtonContainer}>
                  <FormControls
                    loading={loading}
                    error={error}
                    errorClicked={() => resetError()}
                    invalid={invalid}
                    pristine={pristine}
                  />
                </div>
              </Grid>
            </Grid>
          </form>
        )}
      />
    );
  }
}

BestSiteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  submitReport: PropTypes.func.isRequired,
  resetError: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default withStyles(styles)(BestSiteForm);
