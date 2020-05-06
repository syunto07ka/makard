import * as React from 'react';
import './style.module.scss';

interface Props {
  label: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ label, onClick }) => (
  <button onClick={onClick} styleName="button">{label}</button>
);

export default Button;
