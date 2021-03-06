import React from 'react';
import { Router, Redirect } from '@reach/router';

const PrivateRoute = ({ component: Component, authenticated, ...props }) => {
  return authenticated === true ? (
    <Component {...props} />
  ) : (
    <Redirect from='' to='/' noThrow />
  );
};

export default PrivateRoute;
