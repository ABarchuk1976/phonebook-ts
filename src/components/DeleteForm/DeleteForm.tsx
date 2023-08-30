import { FC, SyntheticEvent } from 'react';

import { deleteContact } from '../../redux/contacts/operations';

import {
  StyledInput,
  StyledLabel,
  Button,
	ButtonsWrapper,
  StyledForm,
} from './DeleteForm.styled';

import { useAppDispatch } from '../hooks';

type Props = {
  id: string;
  name: string;
  number: string;
  onClose: () => void;
};

const DeleteForm: FC<Props> = ({ id, name, number, onClose }) => {
  const dispatch = useAppDispatch();

  const handleDeleteSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    void dispatch(deleteContact(id));

    onClose();
  };

  return (
    <StyledForm onSubmit={handleDeleteSubmit}>
      <StyledLabel>
        Name
        <StyledInput type="text" value={name} disabled={true} />
      </StyledLabel>
      <StyledLabel>
        Phone
        <StyledInput type="tel" name="number" value={number} disabled={true} />
      </StyledLabel>
      <ButtonsWrapper>
        <Button type="submit">Delete</Button>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
      </ButtonsWrapper>
    </StyledForm>
  );
};

export default DeleteForm;
