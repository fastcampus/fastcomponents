import React from 'react';
import type { FileUploaderProps } from '../../types/file-uploader.interface';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({
  className,
  onChange,
  onDrop,
  multiple = false,
  accept = '',
  input = false,
  dropzone = false,
  dropzoneChildren,
  dropzoneActiveChildren,
}: FileUploaderProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept, multiple });
  return (
    <div className={`fc-file-uploader ${className}`}>
      {input && <input type="file" onChange={onChange} multiple={multiple} accept={accept}></input>}
      {dropzone && (
        <div className="dropzone" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? dropzoneActiveChildren : dropzoneChildren}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
