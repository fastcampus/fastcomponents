import React from 'react';
import type { ButtonProps } from '../../types/button.interface';

const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
  return (
    <button className="fc-button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
