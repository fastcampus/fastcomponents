import React from 'react';
import type { CheckboxProps } from '../../types/checkbox.interface';

const Checkbox = ({ checked, setChecked, label, disabled = false, className = '', ...restProps }: CheckboxProps) => {
  return (
    <label
      className={`fc-checkbox ${className} ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => setChecked(e.target.checked)}
        {...restProps}
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
};

export default Checkbox;
