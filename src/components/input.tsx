import React from 'react';
import type { InputProps } from '../types/input.interface';

const Input = ({
  style,
  className,
  defaultValue,
  placeholder,
  disabled,
  onChange,
  required,
  ref,
  type,
  value,
  readOnly,
  max,
  maxLength,
  min,
  minLength,
}: InputProps) => (
  <input
    style={style}
    className={className}
    defaultValue={defaultValue}
    disabled={disabled}
    ref={ref}
    onChange={onChange}
    placeholder={placeholder}
    readOnly={readOnly}
    required={required}
    type={type}
    value={value}
    max={max}
    maxLength={maxLength}
    min={min}
    minLength={minLength}
  />
);

export default Input;
