import { useDispatch, useSelector } from 'react-redux';
import { useState, FC, SyntheticEvent, ChangeEvent } from 'react';

import { editContact } from '../../redux/contacts/operations';

import {
  StyledInput,
  StyledLabel,
  Button,
  StyledForm,
} from './ChangeForm.styled';
import { selectContacts } from '../../redux/contacts/selectors';
import { toastMessage } from '../../components/Layout';
import { IContact } from '../../helpers/interfaces/contacts/contactsInterfaces';
import { useAppDispatch } from '../hooks';

type Props = {
  id: string;
  name: string;
  number: string;
  onClose: () => void;
};

interface IChangeFormElements extends HTMLFormControlsCollection {
	name: HTMLInputElement;
	number: HTMLInputElement;
}

const ChangeForm: FC<Props> = ({ id, name, number, onClose }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useAppDispatch();
  const [nameValue, setNameValue] = useState(name);
  const [numberValue, setNumberValue] = useState(number);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const currentInput = evt?.target;

    if (currentInput.name === 'name') {
      setNameValue(currentInput.value);
    } else {
      setNumberValue(currentInput.value);
    }
  };

  const handleEditSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    const form = evt?.target as HTMLFormElement;
    const elements = form.elements as IChangeFormElements;

    const contactName = elements.name.value.trim();
    const contactPhone = elements.number.value.trim();

    if (
      contacts.some(
        contact => contact.name.toLowerCase().trim() === contactName
      ) &&
      contactName !== name
    ) {
      toastMessage('Contact with such name exists yet.');
      return;
    }

    if (contactName === name && contactPhone === number) {
      onClose();
      return;
    }
		const contactData = { id, name: contactName, number: contactPhone } as Partial<IContact>;

    dispatch(editContact( contactData ));

    onClose();
  };

  return (
    <StyledForm onSubmit={handleEditSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={nameValue}
          required
          autoComplete="off"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Phone
        <StyledInput
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={numberValue}
          required
          autoComplete="off"
          onChange={handleChange}
        />
      </StyledLabel>
      <Button type="submit">Edit contact</Button>
    </StyledForm>
  );
};

export default ChangeForm;
