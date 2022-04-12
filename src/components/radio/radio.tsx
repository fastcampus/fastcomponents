import React from 'react';
import type { RadioProps } from '../../types/radio.interface';

const Radio = ({ name, disabled, label, value, checked, setValue, className = '', ...restProps }: RadioProps) => {
  return (
    <label htmlFor={name + value} className={`fc-radio ${className} ${checked ? 'checked' : ''}`}>
      <input
        id={name + value}
        type="radio"
        checked={checked}
        name={name}
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        {...restProps}
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
};

export default Radio;
