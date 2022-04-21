import React from 'react';

export type Value = number | string;
export interface Option {
  value: Value;
  label: string;
}

export interface CustomSelectBlockProps {
  customOptionHeight: number;
  size: number;
  isOptionVisible: boolean;
}

export interface CustomSelectProps {
  selectedValue: Value[];
  setSelectedValue: React.Dispatch<React.SetStateAction<Value[]>>;
  options: Option[];
  size: number;
  multiple: boolean;
  className?: string;
  placeholder: string;
  disabled?: boolean;
}

export interface NativeSelectProps {
  setSelectedValue: React.Dispatch<React.SetStateAction<Value[]>>;
  multiple: boolean;
  options: Option[];
  size: number;
  className?: string;
  placeholder: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: Option[];
  initialSelectedValue?: Value | Value[];
  setValue: (args0: Value[]) => void;
  nativeSelect?: boolean;
  selectAll?: boolean;
  setSelectAll?: (args0: boolean) => void;
  multiple?: boolean;
  size?: number;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}
