import React, { useEffect, useState } from 'react';
import type { Value, SelectProps } from '../../types/select.interface';
import CustomSelect from './custom-select';
import NativeSelect from './native-select';

const Select = ({
  options,
  setValue,
  nativeSelect = false,
  multiple = false,
  size = 0,
  selectAll = false,
  setSelectAll,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<Value[]>(multiple ? [] : [options[0].value]);
  const allOptionSelected = options.length === selectedValue.length;

  useEffect(() => {
    setValue(selectedValue);
    setSelectAll(allOptionSelected);
  }, [selectedValue]);

  useEffect(() => {
    if (selectAll) {
      setSelectedValue([...options.map((option) => option.value)]);
      return;
    }
    if (allOptionSelected) {
      setSelectedValue([]);
    }
  }, [selectAll]);

  if (nativeSelect) {
    return (
      <NativeSelect
        setSelectedValue={setSelectedValue}
        multiple={multiple}
        options={options}
        isAllSelect={selectAll}
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
