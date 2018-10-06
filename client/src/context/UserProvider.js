import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const UserContext = React.createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      authToken: null,
      // user: {
      //   id: 1,
      //   empNum: '850001',
      //   isEmployed: true,
      //   isAccountEnabled: true,
      //   loginStatusId: 1,
      //   loginStatus: null,
      //   firstName: 'Nazif',
      //   lastName: 'Everson',
      //   secret: '850001',
      //   loginFailCnt: 0,
      //   lastFailDtm: '2018-01-01T00:00:00',
      //   lastLoginDtm: '2018-01-01T00:00:00',
      //   lastPwdSetDtm: '2018-01-01T00:00:00',
      //   epIncentives: null,
      //   associateJobBids: null,
      //   supervisorJobBids: null,
      //   leaveAbses: null,
      //   timeOffs: null,
      //   notices: null,
      //   recepientNotices: null,
      //   senderNotices: null
      // }
    };
  }

  _logUserIn(user) {
    user.rememberMe = true;
    axios
      .post('account/Login', user, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
      .then(res => {
        this.setState({ user: res.data, authToken: `Bearer ${res.data}` });
        localStorage.setItem('coldlogic_token', res.data);
      })
      .catch(err => console.log(err));
  }
  _logout() {
    this.setState({ user: null, authToken: null });
  }

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          login: user => this._logUserIn(user),
          logout: () => this._logout(),
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
