import { FC, useState } from 'react';

import {
  ItemWrapper,
  ContactWrapper,
  ItemName,
  ItemPhone,
  ItemModifyBtn,
  BtnWrapper,
} from './ContactListItem.styled';

import Modal from '../../components/Modal/Modal';
import ChangeForm from '../../components/ChangeForm';
import DeleteForm from '../../components/DeleteForm';
import Avatar from '../../components/Avatar/Avatar';

type Props = {
  id: string;
  name: string;
  number: string;
};

const ContactListItem: FC<Props> = ({ id, name, number }) => {
  const [isOpenedEditModal, setIsOpenedEditModal] = useState(false);
  const [isOpenedDeleteModal, setIsOpenedDeleteModal] = useState(false);

  const handleEditModalToggle = (): void => setIsOpenedEditModal(!isOpenedEditModal);
  const handleDeleteModalToggle = (): void =>
    setIsOpenedDeleteModal(!isOpenedDeleteModal);

  return (
    <>
      <ContactWrapper>
        <Avatar str={name} />
        <ItemWrapper>
          <ItemName>{name}</ItemName>
          <ItemPhone>{number}</ItemPhone>
        </ItemWrapper>
        <BtnWrapper>
          <ItemModifyBtn type="button" onClick={handleEditModalToggle}>
            Edit
          </ItemModifyBtn>
          <ItemModifyBtn type="button" onClick={handleDeleteModalToggle}>
            Delete
          </ItemModifyBtn>
        </BtnWrapper>
      </ContactWrapper>
      {isOpenedEditModal && (
        <Modal onClose={handleEditModalToggle}>
          <ChangeForm
            id={id}
            name={name}
            number={number}
            onClose={handleEditModalToggle}
          />
        </Modal>
      )}
      {isOpenedDeleteModal && (
        <Modal onClose={handleDeleteModalToggle}>
          <DeleteForm
            id={id}
            name={name}
            number={number}
            onClose={handleDeleteModalToggle}
          />
        </Modal>
      )}
    </>
  );
};

export default ContactListItem;
