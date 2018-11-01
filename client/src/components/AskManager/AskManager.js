import React from 'react';
import styles from './styles';
import { withStyles, Typography, Paper } from '@material-ui/core';
import { UserContext } from '../../context/UserProvider';
import PropTypes from 'prop-types';
import AskManagerForm from '../Forms/AskManagerForm';

const AskManager = ({ classes, departments }) => (
  <UserContext.Consumer>
    {({ user, submitQuestion }) => (
      <Paper className={classes.formContainer} elevation={0}>
        <Typography className={classes.formTitle} variant="display3">
          Ask A Manager
        </Typography>
        <AskManagerForm
          submitQuestion={submitQuestion}
          user={user}
          departments={departments}
        />
      </Paper>
    )}
  </UserContext.Consumer>
);

AskManager.propTypes = {
  classes: PropTypes.object.isRequired,
  departments: PropTypes.array.isRequired,
};

export default withStyles(styles)(AskManager);
