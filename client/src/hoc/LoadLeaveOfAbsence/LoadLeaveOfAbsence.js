import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { COLDLOGIC_TOKEN } from '../../config/tokens';

class LoadLeaveOfAbsence extends Component {
  state = {
    loading: true,
    error: false,
    reasons: [],
    torLoaStat: [],
    loaCount: null,
  };

  componentDidMount = async () => {
    const Token = await `Bearer ${localStorage.getItem(COLDLOGIC_TOKEN)}`;
    axios
      .all([
        this._getTorLoaStatus(Token),
        this._getLoaReasons(Token),
        this._getLoaCount(Token),
      ])
      .then(
        axios.spread((torloastat, reasons, loaCount) => {
          this.setState({
            reasons: reasons.data,
            torLoaStat: torloastat.data,
            loaCount: loaCount.data,
            loading: false,
          });
        }),
      )
      .catch(err => {
        console.log(err);
        this.setState({ loading: false, error: true });
      });
  };

  _getLoaCount = token => {
    return axios.get('/LeaveAbs/0/count', {
      headers: {
        accept: 'application/json',
        Authorization: token,
      },
    });
  };
  _getTorLoaStatus = token => {
    return axios.get('/TorLoaStatus', {
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
