import React from 'react';

export interface Option {
  value: number | string;
  innerHTML: string;
}

export interface SelectProps {
  options: Option[];
  setValue: (args0: string) => void;
}
