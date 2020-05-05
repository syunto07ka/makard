import * as React from 'react';
import './style.module.scss';

const ModalWrapper: React.FC = ({ children }) => (
  <div styleName="modal-wrapper">
    {children}
  </div>
);

export default ModalWrapper;
