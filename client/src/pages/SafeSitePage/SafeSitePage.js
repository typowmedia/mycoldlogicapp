import React, { Component } from 'react';
import SafeSite from './SafeSite';
import SafeSiteIcon from '../../assets/SafeSiteIcon';
import TitleBar from '../../components/TitleBar';
import { withStyles, Grid } from '@material-ui/core';
import styles from './styles';

class SafeSitePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} md={8}>
          <TitleBar
            icon={<SafeSiteIcon color={'#0D3C55'} />}
            title="Safe Site Report"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <SafeSite />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SafeSitePage);
