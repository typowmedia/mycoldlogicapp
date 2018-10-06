import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const BonusRecognitions = ({ bonuses }) => (
  <div>
    {bonuses.map(bonus => (
      <div>{bonus.id}</div>
    ))}
  </div>
);

export default withStyles(styles)(BonusRecognitions);
