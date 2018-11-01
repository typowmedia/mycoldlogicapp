import React, { Component, Fragment } from 'react';
import {
  InputLabel,
  withStyles,
  FormControl,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';
import FormControls from '../../Forms/FormControls';

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
    const { loading, error, success } = this.state;
    return (
      <div className={classes.form}>
        <Form
          onSubmit={(values, form) =>
            this._onSubmit(values, () => form.reset())
          }
          validate={values => this._validate(values)}
          render={({ handleSubmit, invalid, pristine }) => (
            <form onSubmit={handleSubmit}>
              <FormControl required className={classes.formControl}>
                <Field name="manager">
                  {({ input, meta }) => (
                    <Fragment>
                      <InputLabel
                        htmlFor="manager"
                        error={pristine ? false : meta.error ? true : false}
                      >
                        Manager
                      </InputLabel>
                      <Select
                        error={pristine ? false : meta.error ? true : false}
                        id="manager"
                        value={input.value}
                        {...input}
                        name="manager"
                      >
                        <MenuItem value="" className={classes.selectItem}>
                          <em>None</em>
                        </MenuItem>
                        {departments.map(dept => (
                          <MenuItem
                            className={classes.selectItem}
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
                      error={pristine ? false : meta.error ? true : false}
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
                      error={pristine ? false : meta.error ? true : false}
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
