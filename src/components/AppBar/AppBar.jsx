import AuthNav from '../../components/AuthNav';
import { useAuth } from '../../components/hooks';
import Navigation from '../../components/Navigation';
import UserMenu from '../../components/UserMenu';
import { StyledHeader } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
};

export default AppBar;
