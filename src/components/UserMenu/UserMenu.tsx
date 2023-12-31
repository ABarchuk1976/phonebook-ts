import { FC } from 'react';

import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../components/hooks';

import { StyledButton, UserMenuWrapper, UserText } from './UserMenu.styled';
import { useAppDispatch } from '../hooks/useAppDispatch';

const UserMenu: FC = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  return (
    <UserMenuWrapper>
      <UserText>Welcome, { user?.name } </UserText>
      <StyledButton type="button" onClick={() => void dispatch(logOut())}>
        Log Out
      </StyledButton>
    </UserMenuWrapper>
  );
};

export default UserMenu;
