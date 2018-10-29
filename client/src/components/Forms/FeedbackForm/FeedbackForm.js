import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';

const FeedbackForm = ({ classes }) => (
  <Form
    onSubmit={() => {}}
    validate={() => {}}
    render={({ handleSubmit, pristine }) => (
      <Paper elevation={12} className={classes.feedbackFormContainer}>
        <h1>How's your experience using the My Coldlogic Portal?</h1>
        <form onSubmit={handleSubmit}>
          <Field>{({ input, meta }) => <div>hello</div>}</Field>
        </form>
      </Paper>
    )}
  />
);

FeedbackForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackForm);
