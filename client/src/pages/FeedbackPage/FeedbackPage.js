import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FeedbackForm from '../../components/Forms/FeedbackForm';

class FeedbackPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        alignContent="stretch"
        alignItems="stretch"
        className={classes.feedbackContainer}
      >
        <Grid item sm={12}>
          <FeedbackForm />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FeedbackPage);
