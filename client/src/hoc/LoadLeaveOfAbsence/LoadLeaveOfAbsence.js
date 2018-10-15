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
      .all([this._getLoa(Token), this._getTorLoaStatus(Token)])
      .then(
        axios.spread((reasons, torloastat) => {
          const data = this._formatLeaveOfAbsence(
            reasons.data,
            torloastat.data,
          );
          this.setState({
            data,
            loading: false,
          });
        }),
      )
      .catch(err => this.setState({ loading: false, error: true }));
  }
  _formatLeaveOfAbsence = (reasons, stat) => {
    const loa = reasons.reduce((acc, curr) => {
      const status = stat.find(s => s.id === curr.torLoaStatusId);
      acc.push({
        id: curr.id,
        reason: curr.reasonDetail,
        status: status.name,
        from: moment(curr.timeOffBeg).format('YYYY/MM/DD'),
        to: moment(curr.timeOffEnd).format('YYYY/MM/DD'),
      });
      return acc;
    }, []);
    return loa;
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
