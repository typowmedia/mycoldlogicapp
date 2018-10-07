import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import RequestPasswordPage from '../pages/RequestPasswordPage';
import DashboardPage from '../pages/DashboardPage';
import TimeOffRequestPage from '../pages/TimeOffRequestPage';
import SafeSitePage from '../pages/SafeSitePage';
import BestSitePage from '../pages/BestSitePage';
import BonusRecognitionPage from '../pages/BonusRecognitionPage';
import { UserContext } from '../context/UserProvider';
import Header from '../components/Header';
import NavigationBar from '../components/Navigation/NavigationBar';
import {
  DASHBOARD,
  REQUEST_TIME_OFF,
  BONUS_RECOGNITIONS,
  BEST_SITE_REPORT,
  SAFE_SITE_REPORT,
  HOME,
  REQUEST_PASSWORD,
} from './routes';

export default () => (
  <UserContext.Consumer>
    {({ user, logout }) => {
      if (!user) {
        return (
          <Fragment>
            <Header />
            <Switch>
              <Route exact path={HOME} name="home" component={HomePage} />
              <Route
                exact
                path={REQUEST_PASSWORD}
                name="requestPassword"
                component={RequestPasswordPage}
              />
              <Redirect from="*" to={HOME} />
            </Switch>
          </Fragment>
        );
      }
      return (
        <Fragment>
          <NavigationBar user={user} logout={logout} />
          <Switch>
            <Route exact path={DASHBOARD} component={DashboardPage} />
            <Route
              exact
              path={REQUEST_TIME_OFF}
              component={TimeOffRequestPage}
            />
            <Route
              exact
              path={BONUS_RECOGNITIONS}
              component={() => <BonusRecognitionPage user={user} />}
            />
            <Route exact path={BEST_SITE_REPORT} component={BestSitePage} />
            <Route exact path={SAFE_SITE_REPORT} component={SafeSitePage} />
            <Redirect to={DASHBOARD} />
          </Switch>
        </Fragment>
      );
    }}
  </UserContext.Consumer>
);
