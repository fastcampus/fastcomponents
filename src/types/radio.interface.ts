export interface RadioProps {
  checked: boolean;
  disabled?: boolean;
  name: string;
  setValue: (arg0: string | number) => void;
  value: string | number;
  label?: string | number;
  className?: string;
}
