import { withAuthenticationRequired } from '@auth0/auth0-react';
import { LinearProgress } from '@mui/joy';
import React from 'react';

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component);

  return <Component />;
};
