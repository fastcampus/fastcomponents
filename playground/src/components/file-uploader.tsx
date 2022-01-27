import React, { useState } from 'react';
import { css } from '@emotion/react';
import { FileUploader as FCFileUploader } from '../../../src';

const FileUploader = () => {
  const [fileList, setFileList] = useState<File[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const setFiles = (files: File[]) => {
    setFileList(files);
  };

  return (
    <>
      <div
        css={css`
          padding: 2rem;
        `}
      >
        <h1
          css={css`
            font-size: 4rem;
          `}
        >
          File Uploader
        </h1>
        <h2
          css={css`
            font-size: 2.6rem;
          `}
        >
          선택된 파일들
        </h2>
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
        <h3
          css={css`
            font-size: 2rem;
          `}
        >
          multiple : x, Accept : all
        </h3>
        <FCFileUploader input setFiles={setFiles} />
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
          multiple : o, Accept : image/* fileMaxSize: 1MB
        </h3>
        <FCFileUploader input setFiles={setFiles} multiple accept="image/*" fileMaxSize="1MB" setError={setError} />
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
          Dropzone multiple X Accept : ''
        </h3>

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
          setFiles={setFiles}
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
          Dropzone multiple O Accept : 'image/*' fileMaxSize: 1MB
        </h3>

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
          setFiles={setFiles}
          multiple
          accept="image/*"
          dropzone
          dropzoneChildren={<>Dropzone</>}
          dropzoneActiveChildren={<>여기에 놓아주세요</>}
          setError={setError}
          fileMaxSize="1MB"
        />
      </div>
    </>
  );
};

export default FileUploader;
