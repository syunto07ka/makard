import * as React from 'react';
import './style.module.scss';

interface Props {
  title: string;
  button?: React.ReactNode;
}

const ContentWrapper: React.FC<Props> = ({ title, button, children }) => (
  <div styleName="wrapper">
    <div styleName= "heading">
      <div styleName="title">{title}</div>
      <div styleName="button">{button}</div>
    </div>
    <div styleName="content">{children}</div>
  </div>
);

export default ContentWrapper;
