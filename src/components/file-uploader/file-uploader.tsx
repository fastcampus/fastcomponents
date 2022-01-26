import React from 'react';
import type { FileUploaderProps } from '../../types/file-uploader.interface';
import Dropzone from './dropzone';

const FileUploader = ({
  className,
  onChange,
  onDrop,
  multiple = false,
  accept = '',
  input = false,
  dropzone = false,
  dropzoneChildren,
  dropzoneActiveChildren = <>Hover</>,
  setError,
}: FileUploaderProps) => {
  return (
    <div className={`fc-file-uploader ${className}`}>
      {input && <input type="file" onChange={onChange} multiple={multiple} accept={accept}></input>}
      {dropzone && (
        <Dropzone
          dropzoneChildren={dropzoneChildren}
          setError={setError}
          dropzoneActiveChildren={dropzoneActiveChildren}
          onDrop={onDrop}
          multiple={multiple}
          accept={accept}
        />
      )}
    </div>
  );
};

export default FileUploader;
