import React, { Component } from 'react';
import { BestSiteWelcome, BestSiteForm } from '../../components/BestSite';
import ReportSuccess from '../../components/ReportSuccess';
import MyBestSiteIcon from '../../assets/MyBestSiteIcon';
import TitleBar from '../../components/TitleBar';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import { submitReport } from '../../lib/submitReport';
import { COLDLOGIC_TOKEN } from '../../config/tokens';
import { formatBestSiteReport } from '../../lib/formatReport';
import {
  BEST_SITE_REPORT_2,
  BEST_SITE_REPORT_3,
  BEST_SITE_REPORT,
} from '../../routes/routes';
import PropTypes from 'prop-types';

class BestSitePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
    };
  }
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
      this.props.history.push(BEST_SITE_REPORT_3);
    } else {
      this.setState({ loading: false, error: true });
      return false;
    }
    return true;
  };
  _showBestSitePage = route => {
    switch (route) {
      case BEST_SITE_REPORT_2:
        return (
          <BestSiteForm
            submitReport={this._submitReport}
            loading={this.state.loading}
            error={this.state.error}
          />
        );
      case BEST_SITE_REPORT_3:
        return (
          <ReportSuccess
            leftBtnTitle="New Report"
            leftBtnClick={() => this.props.history.push(BEST_SITE_REPORT)}
          />
        );
      default:
        return (
          <BestSiteWelcome
            clicked={() => this.props.history.push(BEST_SITE_REPORT_2)}
          />
        );
    }
  };
  render() {
    const { classes, match } = this.props;
    return (
      <Grid
        container
        justify="center"
        alignContent="flex-start"
        className={classes.bestSiteContainer}
      >
        <Grid item xs={12} md={8} className={classes.bestSiteTitle}>
          <TitleBar
            icon={<MyBestSiteIcon color={'#0D3C55'} />}
            title="My Best Site Suggestions"
          />
        </Grid>
        <Grid item xs={12} className={classes.bestSiteContent}>
          {this._showBestSitePage(match.path)}
        </Grid>
      </Grid>
    );
  }
}

BestSitePage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(BestSitePage);
