import React, { useState, useCallback } from 'react';
import { fromEvent } from 'file-selector';
import type { DropzoneProps } from '../../types/file-uploader.interface';

const TO_MANY_FILES = new Error('TO_MANY_FILES');
class HAVE_REJECTED_FILES extends Error {
  constructor(rejectedFiles: File[]) {
    const newMessage = `올라가지 않은 파일이 있습니다. : ${rejectedFiles.map((file: File) => file.name)}`;
    super(newMessage);
    this.name = 'HAVE_REJECTED_FILES';
  }
}
const NO_DROP_CALLBACK = new Error('NO_DROP_CALLBACK');

const Dropzone = ({ dropzoneActiveChildren, dropzoneChildren, onDrop, multiple, setError, accept }: DropzoneProps) => {
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);

  const onDropCb = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (!onDrop) throw NO_DROP_CALLBACK;
      const res = (await fromEvent(e as any)) as File[];
      if (!multiple && res.length !== 1) {
        throw TO_MANY_FILES;
      }
      const acceptedFiles: File[] = [];
      const rejectedFiles: File[] = [];
      res.forEach((e: File) => {
        if (!accept) {
          return acceptedFiles.push(e);
        }
        const typeSplit = accept.split('/');
        if (typeSplit[1] === '*') {
          if (typeSplit[0] === e.type.split('/')[0]) {
            acceptedFiles.push(e);
          } else {
            rejectedFiles.push(e);
          }
          return;
        }
        if (accept === e.type) {
          acceptedFiles.push(e);
        } else {
          rejectedFiles.push(e);
        }
        return;
      });

      setError && setError(null);
      onDrop(acceptedFiles);
      if (rejectedFiles.length !== 0) {
        throw new HAVE_REJECTED_FILES(rejectedFiles);
      }
    } catch (err) {
      if (setError) {
        if (err === TO_MANY_FILES) {
          console.error('너무 많은 파일을 드롭했습니다.');
          setError(TO_MANY_FILES);
        }
        if (err instanceof HAVE_REJECTED_FILES) {
          console.log('do');
          setError(err);
        }
        if (err === NO_DROP_CALLBACK) {
          setError(NO_DROP_CALLBACK);
        }
        console.log('error : ', err);
      }
    } finally {
      setIsMouseHover(false);
    }
  };

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
