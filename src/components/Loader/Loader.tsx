import { FC } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

import Modal from '../../components/Modal';

const Loader: FC = () => (
  <Modal onClose={(): void => {}}>
    <ThreeCircles
      height="40"
      width="40"
      color="#a89985"
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  </Modal>
);

export default Loader;
