import React from 'react';
import { NativeSelectProps } from '../../types/select.interface';

const NativeSelect = ({ setSelectedValue, multiple, options, isAllSelect, size }: NativeSelectProps) => {
  const setValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (multiple) {
      const optionDOMs = e.target.options;
      const selectedValues = [...optionDOMs]
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
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default NativeSelect;
