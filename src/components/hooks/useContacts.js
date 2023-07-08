import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const constants = useSelector(selectContacts);

  return { constants, isLoading, error };
};
