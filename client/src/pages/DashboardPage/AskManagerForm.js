import React, { Component, Fragment } from 'react';
import {
  InputLabel,
  Button,
  withStyles,
  FormControl,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
  Chip,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import Spinner from '../../components/UI/Spinner';
import PropTypes from 'prop-types';

class AskManagerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      success: false,
    };
  }

  _onSubmit = async (values, resetForm) => {
    this.setState({ loading: true });
    const success = await this.props.submitQuestion(values, this.props.user);
    if (success.status === 201) {
      this.setState({ loading: false, success: true });
      resetForm();
    } else this.setState({ loading: false, error: true });
  };
  _validate = values => {
    let errors = {};
    if (!values.manager) errors.manager = 'Please select a manager';
    if (!values.subject) errors.subject = 'Please enter a subject';
    if (!values.question) errors.question = 'Please enter a question';

    return errors;
  };

  maxCharLength = (charLimit, value) => {
    if (value.length > charLimit) {
      return value.slice(0, value.length - 1);
    }
    return value;
  };
  render() {
    const { classes, departments } = this.props;

    return (
      <div className={classes.form}>
        <Form
          onSubmit={(values, form) =>
            this._onSubmit(values, () => form.reset())
          }
          validate={values => this._validate(values)}
          render={({ handleSubmit, invalid, form, pristine, values }) => (
            <form onSubmit={handleSubmit} className={classes.accountForm}>
              <FormControl required className={classes.formControl}>
                <Field name="manager">
                  {({ input, meta }) => (
                    <Fragment>
                      <InputLabel htmlFor="manager">Manager</InputLabel>
                      <Select
                        id="manager"
                        value={input.value}
                        {...input}
                        name="manager"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {departments.map(dept => (
                          <MenuItem
                            key={dept.id}
                            value={JSON.stringify({
                              departmentId: dept.id,
                              email: dept.mgrEmail,
                            })}
                          >
                            {dept.mgrName} - {dept.name}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>Required</FormHelperText>
                    </Fragment>
                  )}
                </Field>
              </FormControl>
              <FormControl fullWidth required className={classes.formControl}>
                <Field name="subject">
                  {({ input, meta }) => (
                    <TextField
                      id="subject"
                      {...input}
                      onChange={e => {
                        const value = this.maxCharLength(55, e.target.value);
                        input.onChange(value);
                      }}
                      label="Subject"
                      required
                      autoComplete="off"
                    />
                  )}
                </Field>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <FormControl fullWidth required className={classes.formControl}>
                <Field name="question">
                  {({ input, meta }) => (
                    <TextField
                      id="question"
                      {...input}
                      onChange={e => {
                        const value = this.maxCharLength(300, e.target.value);
                        input.onChange(value);
                      }}
                      label="Question"
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
                          disabled={pristine || invalid}
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

AskManagerForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AskManagerForm);
