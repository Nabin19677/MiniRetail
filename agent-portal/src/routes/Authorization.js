import React from 'react';
import { Route } from 'react-router-dom';


const Authorization = ({ component: Component, rights, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};

export default Authorization;
