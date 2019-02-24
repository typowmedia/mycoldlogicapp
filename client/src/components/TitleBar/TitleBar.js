import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';

const TitleBar = ({ icon, title, classes }) => {
  return (
    <div className={classes.titleBar}>
      <div className={classes.icon}>{icon}</div>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
    </div>
  );
};

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default withStyles(styles)(TitleBar);
