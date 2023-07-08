import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  min-width: 60px;
  border: 2px solid var(--bgcolor-accent);
  border-radius: 50% 50% 50% 0;
  margin-right: 1rem;
`;

export const FirstLetters = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--title-color);
`;
