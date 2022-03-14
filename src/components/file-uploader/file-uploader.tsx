import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { css } from '@emotion/react';
import type { FileUploaderProps } from '../../types/file-uploader.interface';
import Dropzone from './dropzone';
import { getFileListFromEvent, isFileListSizeExceeded } from './utils';
import { FILE_SIZE_EXCEED_ERROR } from './error';

const FileUploader = ({
  className,
  initialFiles,
  setFiles,
  multiple = false,
  accept = '',
  input = false,
  dropzone = false,
  dropzoneChildren,
  dropzoneActiveChildren = <>Hover</>,
  setError,
  fileMaxSize,
  fileUploadText = '파일선택',
}: FileUploaderProps) => {
  const parseFileAndSet = async (files: File[]) => {
    if (fileMaxSize && (await isFileListSizeExceeded(files, fileMaxSize))) {
      throw FILE_SIZE_EXCEED_ERROR;
    }
    setFiles(files);
  };

  const onChangeCb = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files = getFileListFromEvent(e);
      await parseFileAndSet(files);
      setError && setError(null);
    } catch (err) {
      e.target.value = '';
      setError && setError(FILE_SIZE_EXCEED_ERROR);
    }
  }, []);

  useEffect(() => {
    if (initialFiles) {
      parseFileAndSet(initialFiles);
    }
  }, [initialFiles]);

  return (
    <div className={`fc-file-uploader ${className}`}>
      {input && (
        <>
          <label htmlFor="file-input">{fileUploadText}</label>
          <input
            css={css`
              display: none;
            `}
            id="file-input"
            type="file"
            onChange={onChangeCb}
            multiple={multiple}
            accept={accept}
          ></input>
        </>
      )}
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
