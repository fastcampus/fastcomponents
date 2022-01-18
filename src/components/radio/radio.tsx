import React from 'react';
import type { RadioProps } from '../../types/radio.interface';

const Radio = ({ checked, disabled, setChecked }: RadioProps) => {
  return (
    <label className={`fc-radio ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}>
      <input type="radio" checked={checked} disabled={disabled} onChange={(e) => setChecked(e.target.checked)} />
    </label>
  );
};

export default Radio;
