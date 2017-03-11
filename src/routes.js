import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './containers/Main';
import Home from './containers/Home';

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
