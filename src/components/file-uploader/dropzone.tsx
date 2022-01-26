import React, { useState, useCallback } from 'react';
import type { DropzoneProps } from '../../types/file-uploader.interface';
import {
  NO_DROP_CALLBACK_ERROR,
  TO_MANY_FILES_ERROR,
  HAVE_REJECTED_FILES_ERROR,
  FILE_SIZE_EXCEED_ERROR,
} from './error';
import { getFileListFromEvent, isFileListSizeExceeded } from './utils';

const isFileAcceptable = (file: File, accept: string) => {
  const [acceptType, acceptExtension] = accept.split('/'); // ex) image/jpg => ['image', 'jpg']
  const [fileType] = file.type.split('/');
  if (acceptExtension === '*') {
    return acceptType === fileType;
  }
  return accept === file.type;
};

const filterFiles = (droppedFiles: File[], accept: string | undefined) => {
  const acceptedFiles: File[] = [];
  const rejectedFiles: File[] = [];

  droppedFiles.forEach((e: File) => {
    if (!accept) {
      return acceptedFiles.push(e);
    }
    if (isFileAcceptable(e, accept)) {
      acceptedFiles.push(e);
    } else {
      rejectedFiles.push(e);
    }
    return;
  });
  return { acceptedFiles, rejectedFiles };
};

const Dropzone = ({
  dropzoneActiveChildren,
  dropzoneChildren,
  setFile,
  multiple,
  setError,
  accept,
  fileMaxSize,
}: DropzoneProps) => {
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);

  const onDropCb = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMouseHover(false);

    try {
      if (!setFile) throw NO_DROP_CALLBACK_ERROR;

      const droppedFiles = getFileListFromEvent(e);
      if (!multiple && droppedFiles.length !== 1) {
        throw TO_MANY_FILES_ERROR;
      }
      if (fileMaxSize && (await isFileListSizeExceeded(droppedFiles, fileMaxSize))) {
        throw FILE_SIZE_EXCEED_ERROR;
      }

      const { acceptedFiles, rejectedFiles } = filterFiles(droppedFiles, accept);
      setFile(acceptedFiles);

      if (rejectedFiles.length !== 0) {
        throw new HAVE_REJECTED_FILES_ERROR(rejectedFiles);
      }

      setError && setError(null);
    } catch (err) {
      if (setError) {
        if (err === TO_MANY_FILES_ERROR) {
          setError(TO_MANY_FILES_ERROR);
        }
        if (err instanceof HAVE_REJECTED_FILES_ERROR) {
          setError(err);
        }
        if (err === NO_DROP_CALLBACK_ERROR) {
          setError(NO_DROP_CALLBACK_ERROR);
        }
        if (err === FILE_SIZE_EXCEED_ERROR) {
          setError(FILE_SIZE_EXCEED_ERROR);
        }
      }
    }
  }, []);

  const onDragOverCb = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsMouseHover(true);
  }, []);

  return (
    <div className="dropzone" onDrop={onDropCb} onDragOver={onDragOverCb}>
      {isMouseHover ? dropzoneActiveChildren : dropzoneChildren}
    </div>
  );
};

export default Dropzone;
