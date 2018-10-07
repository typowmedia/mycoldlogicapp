import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import TitleBar from '../../components/TitleBar';
import styles from './styles';
import BonusRecognitions from '../../components/BonusRecognitions';
import BonusRecognitionIcon from '../../assets/BonusRecognitionIcon';
import Spinner from '../../components/UI/Spinner';
import axios from 'axios';
import LoadContent from '../../hoc/LoadContent';

class BonusRecognitionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      bonuses: [],
      error: null,
    };
  }

  // componentDidMount() {
  //   axios
  //     .get('/EpIncentives', {
  //       headers: {
  //         accept: 'application/json',
  //         Authorization: `Bearer ${this.props.user}`,
  //       },
  //     })
  //     .then(res => {
  //       this.setState({ bonuses: res.data }, () => {
  //         setTimeout(() => {
  //           this.setState({ loading: false });
  //         }, 3000);
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({ error: err });
  //     });
  // }

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
              return <BonusRecognitions bonuses={data} />;
            }}
          </LoadContent>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(BonusRecognitionPage);
