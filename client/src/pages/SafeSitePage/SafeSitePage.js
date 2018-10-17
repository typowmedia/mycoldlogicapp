import React, { Component } from 'react';
import SafeSite from './SafeSite';
import SafeSiteIcon from '../../assets/SafeSiteIcon';
import TitleBar from '../../components/TitleBar';
import { withStyles, Grid } from '@material-ui/core';
import styles from './styles';
import { submitReport } from '../../lib/submitReport';
import { formatSafetyReport } from '../../lib/formatReport';
import { COLDLOGIC_TOKEN } from '../../config/tokens';

class SafeSitePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 2,
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
    const formattedReport = await formatSafetyReport(report);
    const response = await submitReport(formattedReport, '/SafeSiteVms', token);
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
            icon={<SafeSiteIcon color={'#0D3C55'} />}
            title="Safe Site Report"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <SafeSite
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

export default withStyles(styles)(SafeSitePage);
