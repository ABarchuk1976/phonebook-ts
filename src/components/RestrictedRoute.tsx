import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteProps } from '../helpers/interfaces/common/types';

import { useAuth } from './hooks';

export const RestrictedRoute: FC<RouteProps> = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
