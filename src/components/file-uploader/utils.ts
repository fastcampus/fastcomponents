import React from 'react';
import { INVALID_EVENT_ERROR } from './error';

export const getFileListFromEvent = (
  e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>
): File[] => {
  if ('files' in e.target) {
    const fileList: File[] = e.target.files ? [...e.target.files] : [];
    return fileList;
  }
  if ('dataTransfer' in e) {
    const fileList: File[] = [...e.dataTransfer.files];
    return fileList;
  }
  throw INVALID_EVENT_ERROR;
};
