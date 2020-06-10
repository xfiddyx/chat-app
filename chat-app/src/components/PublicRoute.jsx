import React, { Component } from 'react';
import { Redirect } from '@reach/router';

const PublicRoute = ({ component: Component, authenticated, ...props }) => {
  return authenticated === false ? (
    <Component {...props} />
  ) : (
    <Redirect from='/' to='/homepage' noThrow />
  );
};

export default PublicRoute;
