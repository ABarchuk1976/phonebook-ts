import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  width: fit-content;
  height: fit-content;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--bgcolor-accent);
  border: 1px solid var(--bgcolor-accent);
  border-radius: 1rem;
  margin: 2rem auto;
  background-color: black;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + & {
    margin-top: 0.75rem;
  }
`;

export const StyledInput = styled.input`
  width: 20rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 0 0 1.25rem 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--bgcolor-accent);
  color: var(--title-color);
  &::placeholder {
    font-weight: 200;
    font-style: italic;
    color: var(--bgcolor-second);
  }
`;

export const Button = styled.button`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--main-bgcolor);
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--bgcolor-first);
  transition: background-color 250ms ease, color 250ms ease;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }

  &:hover,
  &:focus {
    background-color: var(--bgcolor-accent);
    color: var(--title-color);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;
