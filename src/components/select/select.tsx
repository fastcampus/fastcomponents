import React, { useEffect, useState, useRef } from 'react';
import type { Value, SelectProps } from '../../types/select.interface';
import CustomSelect from './custom-select';
import SelectUseOption from './select-use-option';

const Select = ({
  options,
  setValue,
  isOptionUse = false,
  multiple = true,
  size = 0,
  isAllSelect = false,
  setIsAllSelect,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<Value[]>(multiple ? [] : [options[0].value]);
  const isAllSelected = options.length === selectedValue.length;

  useEffect(() => {
    setValue(selectedValue);
    setIsAllSelect(isAllSelected);
  }, [selectedValue]);

  useEffect(() => {
    if (isAllSelect) {
      setSelectedValue([...options.map((option) => option.value)]);
      return;
    }
    if (isAllSelected) {
      setSelectedValue([]);
    }
  }, [isAllSelect]);

  if (isOptionUse) {
    return (
      <SelectUseOption
        setSelectedValue={setSelectedValue}
        multiple={multiple}
        options={options}
        isAllSelect={isAllSelect}
        size={size}
      />
    );
  }
  return (
    <CustomSelect
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      options={options}
      size={size}
      multiple={multiple}
    />
  );
};

export default Select;
