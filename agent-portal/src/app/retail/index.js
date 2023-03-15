import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Authorization from '@routes/Authorization';

import RetailKycContainer from './containers/RetailKycContainer';
import NotFound from '@app/exception/containers/NotFoundContainer';

const Retail = ({ match }) => (
  <Fragment>
    <Switch>
      <Authorization
        exact
        path={`${match.url}`}
        component={RetailKycContainer}
        rights={[]}
      />

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Retail;
