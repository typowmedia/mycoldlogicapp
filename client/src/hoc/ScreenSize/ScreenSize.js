import React, { Component, Fragment } from 'react';
import { withTheme } from '@material-ui/core';

class ScreenSize extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: window.innerWidth,
      tabletScreen: this.props.theme.breakpoints.width('md'),
      mobileScreen: this.props.theme.breakpoints.width('sm'),
    };
  }

  componentDidMount = () => {
    window.addEventListener('resize', this._updateWidth);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this._updateWidth);
  };

  _updateWidth = () => {
    const screenWidth = window.innerWidth;
    this.setState({ screenWidth });
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

export default withTheme()(ScreenSize);
