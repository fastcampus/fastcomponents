/* eslint-disable react/prop-types */
import React from 'react';
import type { TextAreaProps } from '../../types/textarea.interface';

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      defaultValue,
      placeholder,
      disabled,
      onChange,
      required,
      value,
      readOnly,
      maxLength,
      minLength,
      id,
    }: TextAreaProps,
    ref
  ) => {
    return (
      <textarea
        className={`fc-textarea ${className || ''}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        ref={ref}
        required={required}
        value={value}
        readOnly={readOnly}
        maxLength={maxLength}
        minLength={minLength}
        id={id}
      ></textarea>
    );
  }
);
TextArea.displayName = 'FCTextArea';

export default TextArea;
