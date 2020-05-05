import * as React from 'react';
import './style.module.scss';

const PageWrapper: React.FC = ({ children }) => (
  <div styleName="page-wrapper">
    {children}
  </div>
);

export default PageWrapper;
