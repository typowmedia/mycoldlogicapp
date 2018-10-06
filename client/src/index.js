import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import UserProvider from './context/UserProvider';
import axios from 'axios';

import theme from './theme';
import Routes from './routes/';
import ApiContextProvider from './context/ApiContextProvider';

axios.defaults.baseURL = 'https://208.98.206.252/my/api/';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <ApiContextProvider>
          <Router>
            <Routes />
          </Router>
        </ApiContextProvider>
      </UserProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
