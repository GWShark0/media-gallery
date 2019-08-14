import React from 'react';
import ReactModal from 'react-modal';

import './Modal.scss';

ReactModal.setAppElement('#root');

function Modal(props) {
  return (
    <ReactModal
      className="Modal"
      overlayClassName="Overlay"
      {...props}
    />
  );
}

export default Modal;
