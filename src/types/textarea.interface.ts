import React from 'react';

export interface TextAreaProps {
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  ref?: React.MutableRefObject<HTMLTextAreaElement>;
  required?: boolean;
  value?: string;
  readOnly?: boolean;
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
  id?: string;
}
