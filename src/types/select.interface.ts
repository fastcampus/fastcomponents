import React from 'react';

export type Value = number | string;
export interface Option {
  value: Value;
  innerHTML: string;
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
}

export interface SelectUseOptionProps {
  setSelectedValue: React.Dispatch<React.SetStateAction<Value[]>>;
  multiple: boolean;
  options: Option[];
  isAllSelect: boolean;
  size: number;
}

export interface SelectProps {
  options: Option[];
  setValue: (args0: Value[]) => void;
  isOptionUse?: boolean;
  isAllSelect?: boolean;
  setIsAllSelect: (args0: boolean) => void;
  multiple?: boolean;
  size?: number;
}
