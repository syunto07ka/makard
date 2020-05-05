import * as React from 'react';
import './style.module.scss';

interface Props {
  title: string;
}

const Modal: React.FC<Props> = ({ title, children }) => (
  <div styleName="modal">
    <div styleName="heading">
      <div></div>
      <div styleName="title">{title}</div>
      <div styleName="close">閉じる</div>
    </div>
    {children}
  </div>
);

export default Modal;
