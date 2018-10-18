import React, { Component } from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import DashboardNavigation from '../../components/Navigation/DashboardNavigation';
import styles from './AskManagerForm/styles';
import PropTypes from 'prop-types';
import { UserContext } from '../../context/UserProvider';
import LoadContent from '../../hoc/LoadContent';
import Spinner from '../../components/UI/Spinner';
import AskManagerForm from '../../components/Forms/AskManagerForm';
import { COLDLOGIC_TOKEN } from '../../config/tokens';
import { formatQuestion } from '../../lib/formatReport';
import { submitReport } from '../../lib/submitReport';

class DashboardPage extends Component {
  _submitQuestion = async (values, user) => {
    const token = await localStorage.getItem(COLDLOGIC_TOKEN);
    const question = await formatQuestion(values, user);
    const url = '/QuesAnswers';
    return submitReport(question, url, token);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12} md={7}>
          <DashboardNavigation />
        </Grid>
        <Grid item xs={12} md={5} className={classes.formContainer}>
          <Typography className={classes.formTitle} variant="display2">
            Ask A Manager
          </Typography>
          <UserContext.Consumer>
            {({ user }) => (
              <LoadContent url="/Departments">
                {({ loading, error, data }) => {
                  if (loading) return <Spinner size={40} color="secondary" />;
                  if (error) return <p>Error</p>;
                  return (
                    <AskManagerForm
                      submitQuestion={(values, user) =>
                        this._submitQuestion(values, user)
                      }
                      user={user}
                      departments={data}
                    />
                  );
                }}
              </LoadContent>
            )}
          </UserContext.Consumer>
        </Grid>
      </Grid>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DashboardPage);
