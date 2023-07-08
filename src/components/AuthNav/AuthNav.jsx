import { StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <nav>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </nav>
  );
};

export default AuthNav;
