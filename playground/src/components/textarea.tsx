import React, { useState } from 'react';
import { css } from '@emotion/react';
import { TextArea } from '../../../src';

const InputList = () => {
  const [messageA, setMessageA] = useState('');
  return (
    <div
      css={css`
        background-color: rgba(0, 0, 255, 0.3);
        padding: 2rem;
        width: 25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-size: 3rem;
        }
        & > div {
          height: 3rem;
          font-size: 2rem;
        }
        .fc-textarea {
          height: 3rem;
        }
      `}
    >
      <h1>Text Area</h1>
      <div>Message a : {messageA}</div>
      <TextArea onChange={(e) => setMessageA(e.target.value)} />
    </div>
  );
};

export default InputList;
