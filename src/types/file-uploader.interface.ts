import React from 'react';

export interface FileUploaderProps {
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onDrop?: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  input?: boolean;
  dropzone?: boolean;
  dropzoneChildren?: React.ReactNode;
  dropzoneActiveChildren?: React.ReactNode;
}
