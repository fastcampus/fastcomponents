import React from 'react';

export type FileSize = number | string;

export interface DropzoneProps {
  accept?: string;
  dropzoneChildren?: React.ReactNode;
  dropzoneActiveChildren?: React.ReactNode;
  fileMaxSize?: FileSize;
  initialFiles?: File[];
  multiple?: boolean;
  setError?: (err: Error | null) => void;
  setFiles: (files: File[]) => void;
}
export interface FileUploaderProps extends DropzoneProps {
  className?: string;
  dropzone?: boolean;
  fileUploadText?: string;
  input?: boolean;
}
