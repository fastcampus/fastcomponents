import React from 'react';
import { css } from '@emotion/react';
import { FileUploader as FCFileUploader } from '../../../src';

const FileUploader = () => {
  const fileUploaderOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const path = e.target.value;
    console.log('path : ', path);
  };
  return (
    <div>
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
      <FCFileUploader onChange={fileUploaderOnChangeHandler} />
      <h3
        css={css`
          font-size: 2rem;
        `}
      >
        multiple : o, Accept : image/*
      </h3>
      <FCFileUploader onChange={fileUploaderOnChangeHandler} multiple accept="image/*" />
    </div>
  );
};

export default FileUploader;
