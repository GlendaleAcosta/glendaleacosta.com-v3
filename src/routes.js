import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './containers/Main';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="portfolio" component={Portfolio} />
  </Route>
);

export default routes;
