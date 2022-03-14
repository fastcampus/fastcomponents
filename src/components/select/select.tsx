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
  const [selectedValue, setSelectedValue] = useState<Value[]>(
    multiple
      ? initialSelectedValue
        ? [...(initialSelectedValue as Value[])]
        : []
      : [(initialSelectedValue as Value) || options[0].value]
  );
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
    setSelectedValue(
      multiple
        ? initialSelectedValue
          ? [...(initialSelectedValue as Value[])]
          : []
        : [(initialSelectedValue as Value) || options[0].value]
    );
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
