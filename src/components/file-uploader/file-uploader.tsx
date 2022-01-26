import React from 'react';
import { useCallback } from 'react';
import type { FileUploaderProps } from '../../types/file-uploader.interface';
import Dropzone from './dropzone';
import { fromEvent } from 'file-selector';

const FileUploader = ({
  className,
  setFile,
  multiple = false,
  accept = '',
  input = false,
  dropzone = false,
  dropzoneChildren,
  dropzoneActiveChildren = <>Hover</>,
  setError,
}: FileUploaderProps) => {
  const onChangeCb = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (await fromEvent(e as any)) as File[];
    setFile(files);
  }, []);

  return (
    <div className={`fc-file-uploader ${className}`}>
      {input && <input type="file" onChange={onChangeCb} multiple={multiple} accept={accept}></input>}
      {dropzone && (
        <Dropzone
          dropzoneChildren={dropzoneChildren}
          setError={setError}
          dropzoneActiveChildren={dropzoneActiveChildren}
          setFile={setFile}
          multiple={multiple}
          accept={accept}
        />
      )}
    </div>
  );
};

export default FileUploader;
