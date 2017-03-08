import React from 'react';
import ReactGA from 'react-ga';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from './layout/App';
import Home from './pages/Home';
import Page404 from './pages/Page404';

ReactGA.initialize(process.env.REACT_APP_G_ANALYTICS);

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export default () => (
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path={process.env.PUBLIC_URL + '/'} component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route path='*' component={Page404} />
  </Router>
);
