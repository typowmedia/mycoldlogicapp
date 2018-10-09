import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinner';
import {
  withStyles,
  FormControl,
  Typography,
  TextField,
  Grid,
  Button,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import PropTypes from 'prop-types';

class BestSiteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onSubmit = values => {
    this.props.submitReport(values);
  };
  _validate = () => {};
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
