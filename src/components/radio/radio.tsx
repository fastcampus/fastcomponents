import React from 'react';
import type { RadioProps } from '../../types/radio.interface';

const Radio = ({ name, disabled, value, setValue }: RadioProps) => {
  return (
    <input type="radio" name={name} value={value} disabled={disabled} onChange={(e) => setValue(e.target.value)} />
  );
};

export default Radio;
