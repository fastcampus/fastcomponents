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
  value,
  selectAll = false,
  setSelectAll,
  className,
  placeholder = '선택',
  disabled = false,
  ...restProps
}: SelectProps) => {
  const setInitialValue = () => {
    if (initialSelectedValue) {
      if (!multiple) {
        return [initialSelectedValue as Value];
      } else {
        return [...(initialSelectedValue as Value[])];
      }
    }
    return [];
  };

  const [selectedValue, setSelectedValue] = useState<Value[]>(setInitialValue());
  const allOptionSelected = options.length === selectedValue.length;

  useEffect(() => {
    setValue(selectedValue);
    setSelectAll && setSelectAll(allOptionSelected);
  }, [selectedValue]);

  useEffect(() => {
    if (value !== undefined && value !== null && !Number.isNaN(value)) {
      setSelectedValue([value]);
    } else {
      setSelectedValue([]);
    }
  }, [value]);

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
    setSelectedValue(setInitialValue());
  }, [initialSelectedValue]);

  if (nativeSelect) {
    return (
      <NativeSelect
        className={className}
        setSelectedValue={setSelectedValue}
        multiple={multiple}
        options={options}
        size={size}
        disabled={disabled}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
  return (
    <CustomSelect
      className={className}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      options={options}
      disabled={disabled}
      size={size}
      multiple={multiple}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default Select;
