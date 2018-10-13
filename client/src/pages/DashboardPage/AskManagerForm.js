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
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import Spinner from '../../components/UI/Spinner';
import PropTypes from 'prop-types';

class AskManagerForm extends Component {
  _onSubmit = values => {
    this.props.submitQuestion(values, this.props.user);
  };
  _validate = () => {};

  maxCharLength = (charLimit, value) => {
    if (value.length > charLimit) {
      return value.slice(0, value.length - 1);
    }
    return value;
  };
  render() {
    const { classes, departments } = this.props;
    console.log(departments);

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

AskManagerForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AskManagerForm);
