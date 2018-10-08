import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import TitleBar from '../../components/TitleBar';
import styles from './styles';
import BonusRecognitions from './BonusRecognitions';
import BonusRecognitionIcon from '../../assets/BonusRecognitionIcon';
import Spinner from '../../components/UI/Spinner';
import LoadContent from '../../hoc/LoadContent';

class BonusRecognitionPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} md={8}>
          <TitleBar
            icon={<BonusRecognitionIcon color={'#0D3C55'} />}
            title="Bonus Recognitions"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <LoadContent url={'/EpIncentives'}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner size={40} color="secondary" />;
              if (error) return <p>Something went wrong!</p>;
              const bonuses = data.sort((a, b) => a.wkEndDate < b.wkEndDate);
              return <BonusRecognitions bonuses={bonuses} />;
            }}
          </LoadContent>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(BonusRecognitionPage);
