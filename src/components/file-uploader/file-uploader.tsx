import React from 'react';
import { useCallback } from 'react';
import type { FileUploaderProps } from '../../types/file-uploader.interface';
import Dropzone from './dropzone';
import { getFileListFromEvent, isFileListSizeExceeded } from './utils';
import { FILE_SIZE_EXCEED_ERROR } from './error';

const FileUploader = ({
  className,
  setFiles,
  multiple = false,
  accept = '',
  input = false,
  dropzone = false,
  dropzoneChildren,
  dropzoneActiveChildren = <>Hover</>,
  setError,
  fileMaxSize,
}: FileUploaderProps) => {
  const onChangeCb = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files = getFileListFromEvent(e);
      if (fileMaxSize && (await isFileListSizeExceeded(files, fileMaxSize))) {
        throw FILE_SIZE_EXCEED_ERROR;
      }
      setFiles(files);

      setError && setError(null);
    } catch (err) {
      setError && setError(FILE_SIZE_EXCEED_ERROR);
    }
  }, []);

  return (
    <div className={`fc-file-uploader ${className}`}>
      {input && <input type="file" onChange={onChangeCb} multiple={multiple} accept={accept}></input>}
      {dropzone && (
        <Dropzone
          dropzoneChildren={dropzoneChildren}
          setError={setError}
          dropzoneActiveChildren={dropzoneActiveChildren}
          setFiles={setFiles}
          multiple={multiple}
          accept={accept}
          fileMaxSize={fileMaxSize}
        />
      )}
    </div>
  );
};

export default FileUploader;
