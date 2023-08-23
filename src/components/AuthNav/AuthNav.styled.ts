import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../../index.css';

export const StyledLink = styled(NavLink)`
  color: inherit;
  &.active {
    color: var(--bgcolor-accent);
  }
  & + & {
    margin-left: 1rem;
  }
`;
