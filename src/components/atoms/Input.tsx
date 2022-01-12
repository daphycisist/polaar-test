import React from 'react';
import { IButton } from '../../types';

const Button: React.FC<IButton> = ({ text, ...rest }) => {
  return <button {...rest}>{text}</button>;
};

export default Button;
