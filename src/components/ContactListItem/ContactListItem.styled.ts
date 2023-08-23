import styled from 'styled-components';
import '../../index.css';

export const ContactWrapper = styled.li`
  display: flex;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid var(--bgcolor-accent);
  border-radius: 0 0 1.25rem 0;
  width: 100%;
`;

export const ItemName = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--bgcolor-accent);
`;

export const ItemPhone = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  color: var(--title-color);
`;

export const ItemModifyBtn = styled.button`
  display: block;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: var(--title-color);

  padding: 0.25rem 0.5rem;
  width: 6.25rem;
  border-radius: 0.25rem;
  border: 1px solid var(--bgcolor-accent);
  background-color: transparent;
  transition: background-color 250ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--bgcolor-accent);
  }
  & + & {
    margin-top: 0.25rem;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
