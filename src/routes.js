import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './containers/Main';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="portfolio" component={Portfolio} />
    <Route path="contact" component={Contact} />
  </Route>
);

export default routes;
