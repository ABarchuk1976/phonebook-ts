import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectName,
	selectEmail
} from '../../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);

  return { name, email, isLoggedIn, isRefreshing };
};
