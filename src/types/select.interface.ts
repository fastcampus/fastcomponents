import React from 'react';

export type Value = number | string;
export interface Option {
  value: Value;
  innerHTML: string;
}

export interface SelectProps {
  options: Option[];
  setValue: (args0: Value[]) => void;
  isOptionUse?: boolean;
  multiple?: boolean;
  size?: number;
}
