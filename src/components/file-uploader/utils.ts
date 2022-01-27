import React from 'react';
import type { FileSize } from 'src/types/file-uploader.interface';
import { INVALID_EVENT_ERROR, FILE_READ_FAIL_ERROR } from './error';

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

const getByteLengthFromFileSize = (fileSize: FileSize) => {
  switch (fileSize.unit) {
    case 'KB':
      return fileSize.size * 1000;
    case 'MB':
      return fileSize.size * 1000000;
    case 'GB':
      return fileSize.size * 1000000000;
    case 'TB':
      return fileSize.size * 1000000000000;
  }
};

const isFileSizeExceeded = (file: File, fileMaxSize: FileSize): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const res = reader.result;
      if (res instanceof ArrayBuffer) {
        if (res.byteLength < getByteLengthFromFileSize(fileMaxSize)) {
          return resolve(false);
        }
        return resolve(true);
      }
      reject(FILE_READ_FAIL_ERROR);
    };
  });
};

export const isFileListSizeExceeded = async (fileList: File[], fileMaxSize: FileSize) => {
  for await (const file of fileList) {
    if (await isFileSizeExceeded(file, fileMaxSize)) {
      return true;
    }
  }
  return false;
};
