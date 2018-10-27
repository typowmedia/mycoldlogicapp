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
                  inputProps={{
                    className: this.props.classes.bestSiteInput,
                  }}
                  InputLabelProps={{
                    className: this.props.classes.bestSiteInputLabel,
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

  _onSubmit = async values => {
    this.props.submitReport(values);
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
    const { classes, loading, error } = this.props;
    return (
      <Form
        onSubmit={this._onSubmit}
        validate={this._validate}
        render={({ handleSubmit, invalid, pristine, values }) => (
          <form onSubmit={handleSubmit} className={classes.bestSiteForm}>
            <div className={classes.bestSiteFormInputContainer}>
              <div className={classes.suggestionContainer}>
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
                        inputProps={{
                          className: classes.bestSiteInput,
                        }}
                        InputLabelProps={{
                          className: classes.bestSiteInputLabel,
                        }}
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
                        inputProps={{
                          className: classes.bestSiteInput,
                        }}
                        InputLabelProps={{
                          className: classes.bestSiteInputLabel,
                        }}
                      />
                    )}
                  </Field>
                </FormControl>
              </div>
              <div className={classes.suggestionCheckboxContainer}>
                <h2 className={classes.suggestionCheckboxTitle}>
                  This has the potential to improve ColdLogic by:
                </h2>
                {checkboxes.map((checkbox, i) => (
                  <Field
                    name="reasons"
                    type="checkbox"
                    value={checkbox}
                    key={i}
                  >
                    {({ input, meta }) => {
                      return (
                        <InputLabel
                          shrink
                          className={classes.bestSiteCheckboxInputLabel}
                        >
                          <Checkbox {...input} />
                          {checkbox}
                        </InputLabel>
                      );
                    }}
                  </Field>
                ))}
                {this._otherReason(values)}
              </div>
            </div>

            <div className={classes.bestSiteButtonContainer}>
              <FormControls
                loading={loading}
                error={error}
                errorClicked={() => this.setState({ error: false })}
                invalid={invalid}
                pristine={pristine}
              />
            </div>
          </form>
        )}
      />
    );
  }
}

BestSiteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  submitReport: PropTypes.func.isRequired,
};

export default withStyles(styles)(BestSiteForm);

{
  /* <div className={classes.buttons}>
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
                </div> */
}
