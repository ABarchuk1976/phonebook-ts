import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/contacts/selectors';

import ContactListItem from '../../components/ContactListItem';
import { StyledList } from './ContactList.styled';
import { FC } from 'react';

const ContactList: FC = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <StyledList>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </StyledList>
  );
};

export default ContactList;
