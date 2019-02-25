import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import ColdLogic from '../../assets/ColdLogicLogo';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { FEEDBACK } from '../../routes/routes';
import styles from './styles';

const ErrorPage = ({ classes, history, location, ...restProps }) => (
  <Grid
    container
    alignContent="stretch"
    alignItems="stretch"
    className={classes.container}
  >
    <Grid item sm={12}>
      <div className={classes.content}>
        <figure className={classes.logoContainer}>
          <ColdLogic color="#0D3C55" />
        </figure>
        <div className={classes.textContainer}>
          <Typography className={classes.text} gutterBottom variant="h4">
            Oops...
          </Typography>
        </div>
        <div className={classes.textContainer}>
          <Typography className={classes.text} variant="h5">
            Something went wrong, not sure what, but things are cold around
            here..
          </Typography>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            onClick={() => history.push(location.state.from)}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Try it again
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => history.push(FEEDBACK)}
          >
            Give Feedback
          </Button>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default withRouter(withStyles(styles)(ErrorPage));
