import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FEEDBACK } from '../../routes/routes';

const FeedbackButtons = ({ classes, history, location }) => {
  return (
    <div className={classes.feedbackButtons}>
      <button
        className={classes.feedbackButton}
        onClick={
          location.pathname === FEEDBACK
            ? () => {}
            : () => history.push(FEEDBACK)
        }
      >
        {location.pathname === FEEDBACK
          ? 'Thank you for being with us'
          : 'Give us your feedback'}
      </button>
    </div>
  );
};

FeedbackButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(FeedbackButtons));
