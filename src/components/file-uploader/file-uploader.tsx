import React from 'react';
import { useCallback } from 'react';
import { css } from '@emotion/react';
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
  fileUploadText = '파일선택',
}: FileUploaderProps) => {
  const onChangeCb = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files = getFileListFromEvent(e);
      if (fileMaxSize && (await isFileListSizeExceeded(files, fileMaxSize))) {
        e.target.value = '';
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
