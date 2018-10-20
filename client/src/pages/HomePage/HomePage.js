import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import AccountForm from '../../components/Forms/AccountForm';
import ColdLogic from '../../assets/ColdLogicLogo';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles';

const HomePage = ({ classes, history }) => (
  <Grid container className={classes.root} justify="center">
    <Grid item xs={12} sm={12} md={6}>
      <ColdLogic color="#0D3C55" />
      <AccountForm history={history} />
    </Grid>
  </Grid>
);

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(HomePage));
