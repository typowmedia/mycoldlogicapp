import React from 'react';
import { AppBar, Typography, withStyles } from '@material-ui/core';
import styles from './styles';

const Header = ({ classes }) => {
  return (
    <AppBar position="static" className={classes.root}>
      <Typography variant="display1" color="inherit" component="h2">
        Welcome to My ColdLogic
      </Typography>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
