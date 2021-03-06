/* eslint-disable react/prop-types */
import React from 'react';
import type { InputProps } from '../../types/input.interface';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      style,
      className,
      defaultValue,
      placeholder,
      disabled,
      onChange,
      required,
      type,
      value,
      readOnly,
      max,
      maxLength,
      min,
      minLength,
      id,
      ...restProps
    }: InputProps,
    ref
  ) => (
    <input
      id={id}
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
      {...restProps}
    />
  )
);
Input.displayName = 'Input';

export default Input;
