import React from 'react';

export interface FileUploaderProps {
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  multiple?: boolean;
  accept?: string;
}
