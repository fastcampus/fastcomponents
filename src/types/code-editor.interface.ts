import { Dispatch } from 'react';

export type SelectableLanguageType =
  | 'cpp'
  | 'css'
  | 'html'
  | 'java'
  | 'javascript'
  | 'json'
  | 'markdown'
  | 'python'
  | 'rust'
  | 'sql'
  | 'xml';

export type SelectableThemeType = 'light' | 'dark';

export interface CodeEditorProps {
  value: string;
  setValue: Dispatch<string>;
  language: SelectableLanguageType;
  theme: SelectableThemeType;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  autoFocus?: boolean;
  placeholder?: string;
}
