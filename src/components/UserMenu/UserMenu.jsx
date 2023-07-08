import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../components/hooks';

import { StyledButton, UserMenuWrapper, UserText } from './UserMenu.styled';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <UserMenuWrapper>
      <UserText>Welcome, {user.name} </UserText>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </StyledButton>
    </UserMenuWrapper>
  );
};

export default UserMenu;
