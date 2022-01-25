import React, { useState } from 'react';
import { css } from '@emotion/react';
import { FileUploader as FCFileUploader } from '../../../src';

const FileUploader = () => {
  const [fileList, setFileList] = useState<File[]>([]);
  const fileUploaderOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const path = e.target.value;
    console.log('path : ', path);
  };
  const fileUploaderOnDropHandler = (files: File[]) => {
    setFileList(files);
  };
  return (
    <div>
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
        <h3
          css={css`
            font-size: 2rem;
          `}
        >
          multiple : x, Accept : all
        </h3>
        <FCFileUploader input onChange={fileUploaderOnChangeHandler} />
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
          multiple : o, Accept : image/*
        </h3>
        <FCFileUploader input onChange={fileUploaderOnChangeHandler} multiple accept="image/*" />
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
          dropzone multiple Accept : image/*
        </h3>
        <div>
          {fileList.map((e) => (
            <div key={e.name}>{e.name}</div>
          ))}
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
          dropzone multiple x Accept : *
        </h3>
        <div>
          {fileList.map((e) => (
            <div key={e.name}>{e.name}</div>
          ))}
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
        />
      </div>
    </div>
  );
};

export default FileUploader;
