import React, { useState } from 'react';
import { css } from '@emotion/react';
import { FileUploader as FCFileUploader } from '../../../src';

const FileUploader = () => {
  const [fileList, setFileList] = useState<File[]>([]);
  const [initFileList, setInitFileList] = useState<File[]>([]);
  const [newFileList, setNewFileList] = useState<File[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const testFiles = (files: File[]) => {
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
        {/* 
        TODO: 다른 fileUploader가 있으면 initialFile setting이 안되는 이슈 수정
        다른 file uploader 테스트 필요시 필요한 것만 주석 풀어서 사용해야함.
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
        <FCFileUploader input setFiles={testFiles} />
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
        <FCFileUploader input setFiles={testFiles} multiple accept="image/*" fileMaxSize="1MB" setError={setError} />
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
          setFiles={testFiles}
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
          setFiles={testFiles}
          multiple
          accept="image/*"
          dropzone
          dropzoneChildren={<>Dropzone</>}
          dropzoneActiveChildren={<>여기에 놓아주세요</>}
          setError={setError}
          fileMaxSize="1MB"
          /> */}
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
          initial file test : 위 파일 업로더로 업로드하면 아래 파일 업로더 값이 변경되어야함.
        </h3>

        <div>파일 업로드 1에 올라간 데이터</div>
        <div>
          {initFileList.map((file) => (
            <span key={file.name}>{file.name}</span>
          ))}
        </div>
        <div>파일 업로드 2에 올라간 데이터</div>
        <div>
          {newFileList.map((file) => (
            <span key={file.name}>{file.name}</span>
          ))}
        </div>
        <FCFileUploader
          css={css`
            font-size: 2rem;
            height: 3rem;
            padding: 1rem;
            border: 1px solid gray;
            margin-bottom: 2rem;
          `}
          fileUploadText="파일업로드1"
          setFiles={(files: File[]) => {
            setInitFileList(files);
          }}
          input
          accept="image/*"
          setError={setError}
        />
        <FCFileUploader
          css={css`
            font-size: 2rem;
            height: 3rem;
            padding: 1rem;
            border: 1px solid gray;
            margin-bottom: 2rem;
          `}
          initialFiles={initFileList}
          fileUploadText="파일업로드2"
          setFiles={(files: File[]) => {
            setNewFileList(files);
          }}
          input
          accept="image/*"
          setError={setError}
        />
      </div>
    </>
  );
};

export default FileUploader;
