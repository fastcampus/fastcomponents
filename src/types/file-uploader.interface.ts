import React from 'react';

export type FileSize = {
  size: number;
  unit: 'KB' | 'MB' | 'GB' | 'TB';
};

export interface DropzoneProps {
  dropzoneChildren?: React.ReactNode;
  dropzoneActiveChildren?: React.ReactNode;
  setFiles: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  setError?: (err: Error | null) => void;
  fileMaxSize?: FileSize;
}
export interface FileUploaderProps extends DropzoneProps {
  className?: string;
  input?: boolean;
  dropzone?: boolean;
}
