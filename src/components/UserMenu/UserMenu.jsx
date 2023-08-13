import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/operations.ts';
import { useAuth } from '../../components/hooks';

import { StyledButton, UserMenuWrapper, UserText } from './UserMenu.styled';

const UserMenu = () => {
  const { name } = useAuth();
  const dispatch = useDispatch();

  return (
    <UserMenuWrapper>
      <UserText>Welcome, { name } </UserText>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </StyledButton>
    </UserMenuWrapper>
  );
};

export default UserMenu;
