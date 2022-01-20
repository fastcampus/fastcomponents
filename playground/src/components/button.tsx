import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Button as FCButton } from '../../../src';

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
      <div
        css={css`
          .fc-button {
            background-color: rgba(0, 0, 255, 0.8);
            color: white;
            &:disabled {
              background-color: rgba(255, 0, 0, 0.3);
            }
          }
        `}
      >
        <div>cnt : {cnt}</div>
        <FCButton onClick={() => setCnt((state) => state + 1)}>+</FCButton>
        <FCButton onClick={() => setCnt((state) => state - 1)}>-</FCButton>
        <FCButton onClick={() => setCnt((state) => state - 1)} disabled={true}>
          -
        </FCButton>
      </div>
    </>
  );
};

export default Button;
