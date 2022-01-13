import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Input } from '../../../src';

const InputList = () => {
  const [messageA, setMessageA] = useState('');
  const [messageB, setMessageB] = useState('');
  return (
    <div
      css={css`
        background-color: rgba(0, 255, 0, 0.3);
        padding: 2rem;
        width: 25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div {
          height: 3rem;
          font-size: 2rem;
        }
        .input {
          height: 3rem;
        }
        .input-test {
          height: 5rem;
        }
      `}
    >
      <div>Message a : {messageA}</div>
      <div>Message b : {messageB}</div>
      <Input className="input" onChange={(e) => setMessageA(e.target.value)} />
      <Input className="input-test" onChange={(e) => setMessageB(e.target.value)} />
    </div>
  );
};

export default InputList;
