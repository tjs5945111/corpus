import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/login/IndexPage';
import RetrievePage from './routes/login/RetrievePage';
import HomeIndexPage from './routes/home/HomeIndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/retrieve" exact component={RetrievePage} />
        <Route path="/" component={HomeIndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
