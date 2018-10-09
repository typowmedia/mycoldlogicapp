import React from 'react';
import {
  withStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './styles';
import moment from 'moment';

const Details = ({ title, value, factor }) => (
  <div>
    <Typography variant="subheading">{title}</Typography>
    {factor ? (
      <Typography variant="body1">{value}</Typography>
    ) : (
      <Typography variant="body1">{`$${value}`}</Typography>
    )}
  </div>
);

const BonusRecognitions = ({ bonuses, classes }) => {
  return (
    <div>
      {bonuses.map(bonus => (
        <ExpansionPanel key={bonus.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              {moment(bonus.wkEndDate).format('MMM Do YYYY')}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Details title={'Daily Incentives'} value={bonus.dlyIncTot} />
            <Details title={'Weekly Incentives'} value={bonus.wklyIncTot} />
            <Details title={'Gross Incentives'} value={bonus.grssInc} />
            <Details title={'BBS Factor'} value={bonus.bbsFactor} factor />
            <Details title={'Net Incentives'} value={bonus.netInc} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default withStyles(styles)(BonusRecognitions);
