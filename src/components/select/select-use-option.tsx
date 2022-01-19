import React from 'react';
import { SelectUseOptionProps } from 'src/types/select.interface';

const SelectUseOption = ({ setSelectedValue, multiple, options, isAllSelect, size }: SelectUseOptionProps) => {
  const setValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (multiple) {
      const options = e.target.options;
      const selectedValues = [...options]
        .filter((option) => option.selected)
        .map((option) => {
          return option.value;
        });

      setSelectedValue(selectedValues);
      return;
    }
    setSelectedValue([e.target.value]);
  };
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
