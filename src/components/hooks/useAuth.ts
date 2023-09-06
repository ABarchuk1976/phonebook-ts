import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectName,
	selectEmail,
	selectToken,
} from '../../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
	const token = useSelector(selectToken)

  return { user: {name, email, token}, isLoggedIn, isRefreshing };
};
