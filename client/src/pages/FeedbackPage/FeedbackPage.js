import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FeedbackForm from '../../components/Forms/FeedbackForm';
import { submitReport } from '../../lib/submitReport';
import { formatFeedbackReport } from '../../lib/formatReport';
import { COLDLOGIC_TOKEN } from '../../config/tokens';
import { DASHBOARD, ERROR, FEEDBACK } from '../../routes/routes';

class FeedbackPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  _submitReport = async report => {
    this.setState({ loading: true });
    try {
      const token = await localStorage.getItem(COLDLOGIC_TOKEN);
      const formattedReport = await formatFeedbackReport(report);
      const response = await submitReport(
        formattedReport,
        '/FeedbackSiteVms',
        token,
      );
      if (response.status === 201) {
        this.props.history.push(DASHBOARD);
      } else {
        this.props.history.push(ERROR, { from: FEEDBACK, showButton: true });
        return;
      }
    } catch (error) {
      this.props.history.push(ERROR, { from: FEEDBACK, showButton: true });
      return;
    }
    this.setState({ loading: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        alignContent="stretch"
        alignItems="stretch"
        className={classes.feedbackContainer}
      >
        <Grid item sm={12}>
          <FeedbackForm onSubmit={this._submitReport} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FeedbackPage);
