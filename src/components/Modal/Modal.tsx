import { useEffect, useCallback, FC, SyntheticEvent, ReactNode } from 'react';

type Props = {
	children: ReactNode;
  onClose: () => void;
};

import { ModalContainer, Overlay } from './Modal.styled';

const Modal: FC<Props> = ({ children, onClose }) => {
  const memoKeyClose = useCallback(handelKeyClose, [handelKeyClose]);

  useEffect(() => {
    window.addEventListener('keydown', memoKeyClose);

    return () => {
      window.removeEventListener('keydown', memoKeyClose);
    };
  }, [memoKeyClose]);

  function handelKeyClose(evt: KeyboardEvent) {
		const code = evt?.code;

    if (code === 'Escape') {
      onClose();
    }
  }

  function handelClose(evt: SyntheticEvent) {
		const {target, currentTarget} = evt;

    if (target === currentTarget) {
      onClose();
    }
  }

  return (
    <Overlay onClick={handelClose}>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>
  );
};

export default Modal;
