import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './hooks';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }: {component: FC, redirectTo: string}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
