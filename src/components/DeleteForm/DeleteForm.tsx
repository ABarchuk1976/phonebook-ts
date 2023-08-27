import PropTypes from 'prop-types';

import { deleteContact } from '../../redux/contacts/operations';

import {
  StyledInput,
  StyledLabel,
  Button,
  StyledForm,
} from './DeleteForm.styled';
import { ButtonsWrapper } from './DeleteForm.styled';
import { useAppDispatch } from '../hooks';

const DeleteForm = ({ id, name, number, onClose }) => {
  const dispatch = useAppDispatch();

  const handleDeleteSubmit = evt => {
    evt.preventDefault();

    dispatch(deleteContact(id));

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

DeleteForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteForm;
