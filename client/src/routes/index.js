import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import RequestPasswordPage from '../pages/RequestPasswordPage';
import DashboardPage from '../pages/DashboardPage';
import LeaveOfAbsenceRequestPage from '../pages/LeaveOfAbsenceRequestPage';
import SafeSitePage from '../pages/SafeSitePage';
import BestSitePage from '../pages/BestSitePage';
import FeedbackPage from '../pages/FeedbackPage';
import FeedbackButtons from '../components/FeedbackButtons';
import BonusRecognitionPage from '../pages/BonusRecognitionPage';
import { UserContext } from '../context/UserProvider';
import Header from '../components/Header';
import NavigationBar from '../components/Navigation/NavigationBar';
import {
  DASHBOARD,
  REQUEST_TIME_OFF,
  BONUS_RECOGNITIONS,
  BEST_SITE_REPORT,
  BEST_SITE_REPORT_2,
  BEST_SITE_REPORT_3,
  SAFE_SITE_REPORT,
  SAFE_SITE_REPORT_2,
  SAFE_SITE_REPORT_3,
  HOME,
  FEEDBACK,
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
              component={LeaveOfAbsenceRequestPage}
            />
            <Route
              exact
              path={BONUS_RECOGNITIONS}
              component={() => <BonusRecognitionPage user={user} />}
            />
            <Route exact path={BEST_SITE_REPORT} component={BestSitePage} />
            <Route exact path={BEST_SITE_REPORT_2} component={BestSitePage} />
            <Route exact path={BEST_SITE_REPORT_3} component={BestSitePage} />
            <Route exact path={SAFE_SITE_REPORT} component={SafeSitePage} />
            <Route exact path={SAFE_SITE_REPORT_2} component={SafeSitePage} />
            <Route exact path={SAFE_SITE_REPORT_3} component={SafeSitePage} />
            <Route exact path={FEEDBACK} component={FeedbackPage} />
            <Redirect to={DASHBOARD} />
          </Switch>
          <FeedbackButtons />
        </Fragment>
      );
    }}
  </UserContext.Consumer>
);
