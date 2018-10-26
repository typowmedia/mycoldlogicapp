import React, { Component } from 'react';
import BestSite from '../../components/BestSite';
import MyBestSiteIcon from '../../assets/MyBestSiteIcon';
import TitleBar from '../../components/TitleBar';
import { withStyles, Grid } from '@material-ui/core';
import styles from './styles';
import { submitReport } from '../../lib/submitReport';
import { COLDLOGIC_TOKEN } from '../../config/tokens';
import { formatBestSiteReport } from '../../lib/formatReport';

class BestSitePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      loading: false,
    };
  }
  _nextStep = () => {
    this.setState(prevState => ({ step: prevState.step + 1 }));
  };
  _prevStep = () => {
    this.setState(prevState => ({ step: prevState.step - 1 }));
  };
  _submitReport = async report => {
    this.setState({ loading: true });
    const token = await localStorage.getItem(COLDLOGIC_TOKEN);
    const formattedResponse = await formatBestSiteReport(report);
    const response = await submitReport(
      formattedResponse,
      '/BestSiteVms',
      token,
    );
    if (response.status === 201) {
      this.setState({ loading: false });
      this._nextStep();
    } else {
      this.setState({ loading: false });
      return false;
    }
    return true;
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={12} md={8}>
          <TitleBar
            icon={<MyBestSiteIcon color={'#0D3C55'} />}
            title="My Best Site Suggestions"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <BestSite
            step={this.state.step}
            nextStep={{
              forward: this._nextStep,
              back: this._prevStep,
            }}
            submitReport={report => this._submitReport(report)}
            loading={this.state.loading}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(BestSitePage);
