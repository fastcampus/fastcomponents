import React from 'react';
import { NativeSelectProps } from '../../types/select.interface';

const NativeSelect = ({
  className,
  setSelectedValue,
  multiple,
  options,
  size,
  placeholder,
  ...restProps
}: NativeSelectProps) => {
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
    <select
      className={`fc-select ${className}`}
      onChange={setValueHandler}
      multiple={multiple}
      size={size}
      {...restProps}
    >
      <option defaultValue="">{placeholder}</option>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default NativeSelect;
