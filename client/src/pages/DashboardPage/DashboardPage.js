import React, { Component } from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import DashboardNavigation from '../../components/Navigation/DashboardNavigation';
import styles from './styles';
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
      <section className={classes.sectionDashboard}>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <DashboardNavigation />
          </Grid>
          <Grid item xs={12} md={6}>
            <UserContext.Consumer>
              {({ user }) => (
                <LoadContent url="/Departments">
                  {({ loading, error, data }) => {
                    if (loading) return <Spinner size={40} color="secondary" />;
                    if (error) return <p>Error</p>;
                    return (
                      <section className={classes.managerFormContainer}>
                        <div className={classes.formContainer}>
                          <Typography
                            className={classes.formTitle}
                            variant="display3"
                          >
                            Ask A Manager
                          </Typography>
                          <AskManagerForm
                            submitQuestion={(values, user) =>
                              this._submitQuestion(values, user)
                            }
                            user={user}
                            departments={data}
                          />
                        </div>
                      </section>
                    );
                  }}
                </LoadContent>
              )}
            </UserContext.Consumer>
          </Grid>
        </Grid>
      </section>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(DashboardPage);
