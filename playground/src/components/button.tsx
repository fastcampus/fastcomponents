import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Button as FCButton } from '../../../src';
import LogoImg from '../icons/logo.svg';
import { ReactComponent as CancelImg } from '../icons/cancel.svg';

const Button = () => {
  const [cnt, setCnt] = useState(0);
  return (
    <>
      <h1
        css={css`
          font-size: 2rem;
        `}
      >
        Button
      </h1>
      <div>
        <div>cnt : {cnt}</div>
        <div
          css={css`
            display: flex;
            .fc-button {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.5rem 1rem;
              background-color: rgba(0, 0, 255, 0.2);
              color: black;
              &:disabled {
                background-color: rgba(255, 0, 0, 0.3);
              }
            }
          `}
        >
          <FCButton onClick={() => setCnt((state) => state + 1)}>+</FCButton>
          <FCButton onClick={() => setCnt((state) => state - 1)}>-</FCButton>
          <FCButton onClick={() => setCnt((state) => state - 1)} disabled={true}>
            -
          </FCButton>
        </div>
        <div
          css={css`
            .fc-button {
              display: flex;
              align-items: center;
              padding: 0.5rem 1rem;
              background-color: rgba(0, 0, 255, 0.2);
              color: black;
              &:disabled {
                background-color: rgba(255, 0, 0, 0.3);
              }
            }
          `}
        >
          <FCButton onClick={() => setCnt(0)}>
            취소하기
            <CancelImg className="test" />
          </FCButton>
          <FCButton
            css={css`
              img {
                margin-right: 1rem;
              }
            `}
            onClick={() => (window.location.href = 'https://fastcampus.app')}
          >
            <img src={LogoImg} /> 패스트캠퍼스 기업강의로 이동
          </FCButton>
        </div>
      </div>
    </>
  );
};

export default Button;
