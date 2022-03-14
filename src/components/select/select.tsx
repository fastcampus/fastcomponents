import React, { useEffect, useState } from 'react';
import type { Value, SelectProps } from '../../types/select.interface';
import CustomSelect from './custom-select';
import NativeSelect from './native-select';

const Select = ({
  options,
  initialSelectedValue,
  setValue,
  nativeSelect = false,
  multiple = false,
  size = 0,
  selectAll = false,
  setSelectAll,
  className,
}: SelectProps) => {
  const setInitailValue = () => {
    if (!multiple) return [(initialSelectedValue as Value) || options[0].value];
    if (initialSelectedValue) return [...(initialSelectedValue as Value[])];
    return [];
  };

  const [selectedValue, setSelectedValue] = useState<Value[]>(setInitailValue());
  const allOptionSelected = options.length === selectedValue.length;

  useEffect(() => {
    setValue(selectedValue);
    setSelectAll && setSelectAll(allOptionSelected);
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

  useEffect(() => {
    setSelectedValue(setInitailValue());
  }, [initialSelectedValue]);

  if (nativeSelect) {
    return (
      <NativeSelect
        className={className}
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
      className={className}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      options={options}
      size={size}
      multiple={multiple}
    />
  );
};

export default Select;
