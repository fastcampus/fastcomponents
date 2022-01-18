import React from 'react';

export interface RadioProps {
  disabled: boolean;
  name: string;
  setValue: (arg0: string | number) => void;
  value: string | number;
}
