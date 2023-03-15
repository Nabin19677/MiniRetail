import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Authorization from '@routes/Authorization';
import RetailDashboardContainer from './containers/RetailDashboardContainer';
import NotFound from '@app/exception/components/NotFound';

export const RetailDashboard = ({ match }) => {
  <Fragment>
    <Switch>
       <Authorization path={`${match.url}`} component={RetailDashboardContainer}   rights={[]}  />
      <Route component={NotFound} />
    </Switch>
  </Fragment>;
};

export default RetailDashboard;
