import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { RouteProps } from '../helpers/interfaces/common/types';

import { useAuth } from './hooks';

export const PrivateRoute: FC<RouteProps> = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
