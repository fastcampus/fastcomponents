import React from 'react';
import type { CheckboxProps } from '../../types/checkbox.interface';

const Checkbox = ({ checked, setChecked, disabled }: CheckboxProps) => {
  return (
    <label className={`fc-checkbox ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        className="common-checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </label>
  );
};

export default Checkbox;
