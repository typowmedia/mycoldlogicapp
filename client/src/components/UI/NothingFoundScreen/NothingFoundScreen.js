import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

class NothingFoundScreen extends Component {
  render() {
    const { classes, messageTop, messageBottom } = this.props;
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.NothingContainer}
      >
        <Grid item xs={8} className={classes.nothingItem}>
          <Typography variant="headline" align="center" gutterBottom>
            {messageTop}
          </Typography>
          <Typography variant="body1" align="center">
            {messageBottom}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

NothingFoundScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NothingFoundScreen);
