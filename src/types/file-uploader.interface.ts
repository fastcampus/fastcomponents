import React from 'react';

export interface DropzoneProps {
  dropzoneChildren?: React.ReactNode;
  dropzoneActiveChildren?: React.ReactNode;
  setFile: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  setError?: (err: Error | null) => void;
}
export interface FileUploaderProps extends DropzoneProps {
  className?: string;
  input?: boolean;
  dropzone?: boolean;
}
