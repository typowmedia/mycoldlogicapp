import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ERROR } from '../../routes/routes';

class ErrorHandler extends Component {
  componentDidMount = () => {
    this.props.history.push(ERROR, { from: this.props.from });
  };

  render() {
    return <div>null</div>;
  }
}

export default withRouter(ErrorHandler);
