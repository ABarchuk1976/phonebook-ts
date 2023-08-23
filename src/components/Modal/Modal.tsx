import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { ModalContainer, Overlay } from './Modal.styled';

const Modal = ({ children, onClose }) => {
  const memoKeyClose = useCallback(handelKeyClose, [handelKeyClose]);

  useEffect(() => {
    window.addEventListener('keydown', memoKeyClose);

    return () => {
      window.removeEventListener('keydown', memoKeyClose);
    };
  }, [memoKeyClose]);

  function handelKeyClose(evt) {
    if (evt.code === 'Escape') {
      onClose();
    }
  }

  function handelClose(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return (
    <Overlay onClick={handelClose}>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Modal;
