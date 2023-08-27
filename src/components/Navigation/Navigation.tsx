import { FC } from 'react';

import { useAuth } from '../../components/hooks';
import { StyledLink } from './Navigation.styled';

const Navigation: FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">My Contacts</StyledLink>}
    </nav>
  );
};

export default Navigation;
