import React from 'react';
import { SelectUseOptionProps } from 'src/types/select.interface';

const SelectUseOption = ({ setValueHandler, multiple, options, isAllSelect, size }: SelectUseOptionProps) => {
  return (
    <select className="fc-select" onChange={setValueHandler} multiple={multiple} size={size}>
      {options.map((option) => (
        <option key={option.value} value={option.value} selected={multiple && isAllSelect}>
          {option.innerHTML}
        </option>
      ))}
    </select>
  );
};

export default SelectUseOption;
