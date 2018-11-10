import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Spinner from '../components/UI/Spinner';
import { COLDLOGIC_TOKEN } from '../config/tokens';
import { formatQuestion } from '../lib/formatReport';
import { submitReport } from '../lib/submitReport';

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

  _submitQuestion = async (values, user) => {
    const token = await localStorage.getItem(COLDLOGIC_TOKEN);
    const question = await formatQuestion(values, user);
    const url = '/QuesAnswers';
    return submitReport(question, url, token);
  };

  componentDidMount = async () => {
    const userToken = await localStorage.getItem(COLDLOGIC_TOKEN);
    if (userToken && typeof userToken === 'string') {
      try {
        const user = await this._getUser(userToken);
        if (user.status === 200) {
          this.setState({ user: user.data, loading: false });
        } else {
          this.setState({ user: null, loading: false });
        }
      } catch (error) {
        this.setState({ user: null, loading: false });
      }
    } else {
      this.setState({ user: null, loading: false });
    }
  };

  _getUser = userToken => {
    return axios
      .get('account/Claims', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(res => res)
      .catch(err => console.log(err));
  };

  _logUserIn = async user => {
    try {
      user.rememberMe = true;
      const userToken = await axios.post('account/Login', user, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
      await localStorage.setItem(COLDLOGIC_TOKEN, userToken.data);
      const authenticatedUser = await this._getUser(userToken.data);
      this.setState({ user: authenticatedUser.data });
      return true;
    } catch (error) {
      return false;
    }
  };

  _logout() {
    this.setState({ user: null });
    localStorage.removeItem(COLDLOGIC_TOKEN);
  }

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          login: user => this._logUserIn(user),
          logout: () => this._logout(),
          submitQuestion: (values, user) => this._submitQuestion(values, user),
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
