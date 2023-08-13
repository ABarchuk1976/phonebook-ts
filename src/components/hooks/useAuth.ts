import { useSelector } from 'react-redux';
import { IAuthState } from '../../helpers/interfaces/auth/authInterfaces';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectName,
	selectEmail
} from '../../redux/auth/selectors';

export const useAuth = (): IAuthState => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);

  return { name, email, isLoggedIn, isRefreshing };
};
