import styled from 'styled-components';
import '../../index.css';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserText = styled.p`
  display: block;
  margin-right: 1rem;
`;

export const StyledButton = styled.button`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--main-bgcolor);
  width: 5.875rem;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--bgcolor-first);
  transition: background-color 250ms ease, color 250ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--bgcolor-accent);
    color: var(--title-color);
  }
`;
