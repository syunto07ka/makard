import * as React from 'react';
import './style.module.scss';

interface Props {
  title: string;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ title, closeModal, children }) => (
  <div styleName="modal">
    <div styleName="heading">
      <div></div>
      <div styleName="title">{title}</div>
      <button styleName="close" onClick={closeModal}>閉じる</button>
    </div>
    {children}
  </div>
);

export default Modal;
