import React from 'react';
import type { RadioProps } from '../../types/radio.interface';

const Radio = ({ name, disabled, value, setValue, className, ...restProps }: RadioProps) => {
  return (
    <div className={`fc-radio ${className}`}>
      <input
        id={name + value}
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        {...restProps}
      />
      <label className="label" htmlFor={name + value}></label>
    </div>
  );
};

export default Radio;
