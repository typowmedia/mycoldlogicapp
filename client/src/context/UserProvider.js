import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Spinner from '../components/UI/Spinner';

export const UserContext = React.createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount = async () => {
    const userToken = localStorage.getItem('COLDLOGIC_TOKEN');
    if (userToken && typeof userToken === 'string') {
      try {
        const user = await this._getUser(userToken);
        if (user.status === 200) {
          this.setState({ user: user.data, loading: false });
          console.log('User Already Logged in!');
        } else {
          this.setState({ user: null, loading: false });
        }
      } catch (error) {
        this.setState({ user: null, loading: false });
      }
    } else {
      this.setState({ loading: false });
    }
  };

  _getUser = async userToken => {
    const user = await axios.get('account/Claims', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    });
    return user;
  };

  _logUserIn = async user => {
    try {
      user.rememberMe = true;
      const userToken = await axios.post('account/Login', user, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
      const authenticatedUser = this._getUser(userToken.data);
      this.setState({ user: authenticatedUser });
      localStorage.setItem('COLDLOGIC_TOKEN', userToken.data);
    } catch (error) {
      console.log('ERROR!@$$', error);
    }
  };

  _logout() {
    this.setState({ user: null });
    localStorage.removeItem('COLDLOGIC_TOKEN');
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
        {this.state.loading ? <Spinner size={40} color="primary" /> : children}
      </UserContext.Provider>
    );
  }
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
