import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import withAuth from './utils/withAuth';
// import Error from './pages/Error';
// import ErrorBoundary from 'react-error-boundary';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/" component={withAuth(Home)} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
