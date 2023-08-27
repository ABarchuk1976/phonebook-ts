import { toastMessage } from '../../components/Layout';
import { useSelector } from 'react-redux';

import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import {
  StyledInput,
  StyledLabel,
  Button,
  StyledForm,
} from './InputForm.styled';

import { useAppDispatch } from '../hooks';
import { FC, SyntheticEvent } from 'react';
import { IFormElements } from '../../helpers/interfaces/common/interfaces';

const InputForm: FC = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

		const form = evt?.target as HTMLFormElement;
    const { name, number } = form.elements as IFormElements;
    
    const contactName = name.value.trim();
    const contactPhone = number.value.trim();

    if (
      !contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === contactName.toLowerCase()
      )
    ) {
      form.reset();

      dispatch(addContact({ name: contactName, number: contactPhone }));
    } else {
      toastMessage('Contact with such name exists yet.');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
        />
      </StyledLabel>
      <StyledLabel>
        Phone
        <StyledInput
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
        />
      </StyledLabel>
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};

export default InputForm;
