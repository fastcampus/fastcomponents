export type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface InputProps {
  style?: React.CSSProperties;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  ref?: React.LegacyRef<HTMLInputElement>;
  required?: boolean;
  type?: InputType;
  value?: string;
  readOnly?: boolean;
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
  id?: string;
}
