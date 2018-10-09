import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { COLDLOGIC_TOKEN } from '../../config/tokens';

class LoadContent extends Component {
  state = {
    loading: true,
    error: false,
    data: [],
  };

  componentDidMount() {
    const Token = `Bearer ${localStorage.getItem(COLDLOGIC_TOKEN)}`;
    axios
      .get(this.props.url, {
        headers: {
          accept: 'application/json',
          Authorization: Token,
        },
      })
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => this.setState({ loading: false, error: true }));
  }

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

export default LoadContent;
