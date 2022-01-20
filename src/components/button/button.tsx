import React from 'react';
import type { ButtonProps } from '../../types/button.interface';

const Button = ({ children, onClick, disabled = false, className }: ButtonProps) => {
  return (
    <button className={`fc-button ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
