import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.25rem;
  color: var(--bgcolor-accent);
  margin-bottom: 1rem;
`;

export const FilterInput = styled.input`
  width: 23rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 0 0 1.25rem 0;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid var(--bgcolor-accent);
  color: var(--title-color);
  &::placeholder {
    font-weight: 200;
    font-style: italic;
    color: var(--bgcolor-second);
  }
`;
