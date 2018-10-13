import React, { Component } from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import DashboardNavigation from '../../components/Navigation/DashboardNavigation';
import AskManagerForm from './AskManagerForm';
import styles from './styles';
import PropTypes from 'prop-types';
import { UserContext } from '../../context/UserProvider';
import LoadContent from '../../hoc/LoadContent';
import Spinner from '../../components/UI/Spinner';
import axios from 'axios';
import { COLDLOGIC_TOKEN } from '../../config/tokens';

class DashboardPage extends Component {
  _submitQuestion = async (values, user) => {
    console.log(values, user);
    const token = await localStorage.getItem(COLDLOGIC_TOKEN);
    const url = '/QuesAnswers';
    const manager = JSON.parse(values.manager);
    const question = {
      employeeId:
        user[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ],
      departmentId: manager.departmentId,
      //email: manager.email,
      email: 'luis@typow.ca',
      subject: values.subject,
      question: values.question,
    };
    axios
      .post(url, question, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
