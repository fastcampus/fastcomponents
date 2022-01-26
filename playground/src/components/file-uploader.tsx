import React, { useState } from 'react';
import { css } from '@emotion/react';
import { FileUploader as FCFileUploader } from '../../../src';

const FileUploader = () => {
  const [fileList, setFileList] = useState<File[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const fileUploaderOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const path = e.target.value;
    console.log('path : ', path);
  };

  const fileUploaderOnDropHandler = (files: File[]) => {
    setFileList(files);
  };

  return (
    <>
      <div
        css={css`
          padding: 2rem;
        `}
      >
        <h3
          css={css`
            font-size: 2rem;
          `}
        >
          Dropzone-copy multiple X Accept : ''
        </h3>
        {fileList.map((file) => (
          <div key={file.name}>{file.name}</div>
        ))}
        <div
          css={css`
            font-size: 1.8rem;
            color: red;
          `}
        >
          {error?.message}
        </div>
        <FCFileUploader
          css={css`
            .dropzone {
              width: 20rem;
              height: 10rem;
              background-color: rgba(0, 0, 0, 0.2);
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
          onChange={fileUploaderOnChangeHandler}
          onDrop={fileUploaderOnDropHandler}
          dropzone
          dropzoneChildren={<>Dropzone</>}
          dropzoneActiveChildren={<>여기에 놓아주세요</>}
          setError={setError}
        />
      </div>
      <div
        css={css`
          padding: 2rem;
        `}
      >
        <h3
          css={css`
            font-size: 2rem;
          `}
        >
          Dropzone-copy multiple O Accept : 'image/*'
        </h3>
        {fileList.map((file) => (
          <div key={file.name}>{file.name}</div>
        ))}
        <div
          css={css`
            font-size: 1.8rem;
            color: red;
          `}
        >
          {error?.message}
        </div>
        <FCFileUploader
          css={css`
            .dropzone {
              width: 20rem;
              height: 10rem;
              background-color: rgba(0, 0, 0, 0.2);
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
          onChange={fileUploaderOnChangeHandler}
          onDrop={fileUploaderOnDropHandler}
          multiple
          accept="image/*"
          dropzone
          dropzoneChildren={<>Dropzone</>}
          dropzoneActiveChildren={<>여기에 놓아주세요</>}
          setError={setError}
        />
      </div>
    </>
  );
};

export default FileUploader;
