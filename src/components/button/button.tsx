import React from 'react';
import type { ButtonProps } from '../../types/button.interface';

const Button = ({ children, onClick, disabled = false, className, ...restProps }: ButtonProps) => {
  return (
    <button className={`fc-button ${className}`} onClick={onClick} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
