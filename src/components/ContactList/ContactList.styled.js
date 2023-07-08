import styled from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  height: fit-content;
  padding: 1rem;

  @media screen and (min-width: 1200px) and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1601px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
