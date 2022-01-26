import React from 'react';

export type Byte = number;
export interface DropzoneProps {
  dropzoneChildren?: React.ReactNode;
  dropzoneActiveChildren?: React.ReactNode;
  setFile: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  setError?: (err: Error | null) => void;
  fileMaxSize?: Byte;
}
export interface FileUploaderProps extends DropzoneProps {
  className?: string;
  input?: boolean;
  dropzone?: boolean;
}
