import React from 'react';
import styles from './styles';
import { withStyles, withTheme, Typography, Paper } from '@material-ui/core';
import { UserContext } from '../../context/UserProvider';
import LoadContent from '../../hoc/LoadContent';
import Spinner from '../../components/UI/Spinner';
import PropTypes from 'prop-types';
import AskManagerForm from '../Forms/AskManagerForm';

const AskManager = ({ classes, theme }) => (
  <UserContext.Consumer>
    {({ user, submitQuestion }) => (
      <LoadContent url="/Departments">
        {({ loading, error, data }) => {
          if (loading) return <Spinner size={40} color="secondary" />;
          if (error) return <p>Error</p>;
          return (
            <Paper className={classes.formContainer} elevation={0}>
              <Typography className={classes.formTitle} variant="display3">
                Ask A Manager
              </Typography>
              <AskManagerForm
                submitQuestion={submitQuestion}
                user={user}
                departments={data}
              />
            </Paper>
          );
        }}
      </LoadContent>
    )}
  </UserContext.Consumer>
);

AskManager.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(AskManager));
