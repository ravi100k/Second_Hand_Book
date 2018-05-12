import React from 'react';
import { Router, Route, Switch, Link, NavLink,BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Order from '../components/Order';
import BuyBook from '../components/BuyBook';
import SellBooks from '../components/SellBook';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/buybooks" component={BuyBook} excat={true} />
        <Route path="/sellbooks" component={SellBooks} exact={true} />
        <Route path="/Order" component={Order} excat={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
