import React from 'react';
import type { CheckboxProps } from '../../types/checkbox.interface';

const Checkbox = ({ checked, setChecked, disabled, className }: CheckboxProps) => {
  return (
    <label className={`fc-checkbox ${className} ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={(e) => setChecked(e.target.checked)} />
    </label>
  );
};

export default Checkbox;
