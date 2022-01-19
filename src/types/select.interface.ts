import React from 'react';

export type Value = number | string;
export interface Option {
  value: Value;
  innerHTML: string;
}

export interface CustomSelectProps {
  customOptionHeight: number;
  size: number;
  isOptionVisible: boolean;
}

export interface SelectUseOptionProps {
  setValueHandler: (args0: React.ChangeEvent<HTMLSelectElement>) => void;
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
