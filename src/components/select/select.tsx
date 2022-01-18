import React from 'react';
import type { SelectProps } from '../../types/select.interface';

const Select = ({ options, setValue }: SelectProps) => {
  return (
    <select className="fc-select" onChange={(e) => setValue(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.innerHTML}
        </option>
      ))}
    </select>
  );
};

export default Select;
