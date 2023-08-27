import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }: {component: FC, redirectTo: string}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
