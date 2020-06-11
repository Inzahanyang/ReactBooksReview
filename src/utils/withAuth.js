import React from 'react';
import { Redirect } from 'react-router-dom';

export default (Component) => {
  return (props) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to="/signin" />;
    }
    return <Component token={token} {...props} />;
  };
};
