import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { COLDLOGIC_TOKEN } from '../../config/tokens';
import moment from 'moment';

class LoadLeaveOfAbsence extends Component {
  state = {
    loading: true,
    error: false,
    data: [],
  };

  componentDidMount() {
    const Token = `Bearer ${localStorage.getItem(COLDLOGIC_TOKEN)}`;
    axios
      .all([
        this._getLoa(Token),
        this._getTorLoaStatus(Token),
        this._getLoaReasons(Token),
      ])
      .then(
        axios.spread((loa, torloastat, reasons) => {
          const data = this._formatLeaveOfAbsence(
            loa.data,
            torloastat.data,
            reasons.data,
          );
          this.setState({
            data,
            reasons: reasons.data,
            loading: false,
          });
        }),
      )
      .catch(err => this.setState({ loading: false, error: true }));
  }
  _formatLeaveOfAbsence = (loa, stat, reasons) => {
    const data = loa.reduce((acc, curr) => {
      const status = stat.find(s => s.id === curr.torLoaStatusId);
      const reason = reasons.find(r => r.id === curr.leaveAbsReasonId);
      acc.push({
        id: curr.id,
        reason: reason.name,
        status: status.name,
        from: moment(curr.timeOffBeg).format('YYYY/MM/DD'),
        to: moment(curr.timeOffEnd).format('YYYY/MM/DD'),
      });
      return acc;
    }, []);
    return data;
  };
  _getTorLoaStatus = token => {
    return axios.get('/TorLoaStatus', {
      headers: {
        accept: 'application/json',
        Authorization: token,
      },
    });
  };
  _getLoa = token => {
    return axios.get('/LeaveAbs', {
      headers: {
        accept: 'application/json',
        Authorization: token,
      },
    });
  };
  _getLoaReasons = token => {
    return axios.get('/LeaveAbsReasons', {
      headers: {
        accept: 'application/json',
        Authorization: token,
      },
    });
  };
  render() {
    return (
      <Fragment>
        {this.props.children({
          ...this.props,
          ...this.state,
        })}
      </Fragment>
    );
  }
}

export default LoadLeaveOfAbsence;
