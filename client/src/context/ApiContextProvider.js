import React, { Component } from 'react';
import Axios from 'axios';

export const ApiContext = React.createContext();

class ApiContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: null,
      error: null,
    };
  }

  _get = url => {
    const TOKEN = `Bearer ${localStorage.getItem('coldlogic_token')}`;
    Axios.get(url, {
      headers: {
        accepts: 'application/json',
        Authorization: TOKEN,
      },
    })
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    const { loading, error, data } = this.state;
    return (
      <ApiContext.Provider
        values={{ loading, error, data, get: url => this._get(url) }}
      >
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}

export default ApiContextProvider;
