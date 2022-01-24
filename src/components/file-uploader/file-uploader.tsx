import React from 'react';
import type { FileUploaderProps } from '../../types/file-uploader.interface';

const FileUploader = ({ className, onChange, multiple = false, accept = '' }: FileUploaderProps) => {
  return (
    <input
      className={`fc-file-uploader ${className}`}
      type="file"
      onChange={onChange}
      multiple={multiple}
      accept={accept}
    ></input>
  );
};

export default FileUploader;
