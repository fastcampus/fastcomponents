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
}

export interface NativeSelectProps {
  setSelectedValue: React.Dispatch<React.SetStateAction<Value[]>>;
  multiple: boolean;
  options: Option[];
  isAllSelect: boolean;
  size: number;
  className?: string;
}

export interface SelectProps {
  options: Option[];
  setValue: (args0: Value[]) => void;
  nativeSelect?: boolean;
  selectAll?: boolean;
  setSelectAll?: (args0: boolean) => void;
  multiple?: boolean;
  size?: number;
  className?: string;
}
