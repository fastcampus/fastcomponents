import React, { useState } from 'react';
import { css } from '@emotion/react';
import Input from '../../../src/components/input';

const InputList = () => {
  const [messageA, setMessageA] = useState('');
  const [messageB, setMessageB] = useState('');
  return (
    <div>
      <div
        css={css`
          font-size: 3rem;
        `}
      >
        Message a : {messageA}
      </div>
      <div
        css={css`
          font-size: 3rem;
        `}
      >
        Message b : {messageB}
      </div>
      <Input
        style={css`
          background-color: blue;
          padding: 2rem;
          width: 25rem;
          display: flex;
          align-items: center;
          & > input {
            height: 3rem;
          }

          & > button {
            height: 3rem;
            font-size: 2.5rem;
          }
        `}
        setInput={setMessageA}
      />
      <Input
        style={css`
          display: flex;
          padding: 2rem;
          width: 25rem;
          background-color: black;
          align-items: center;
          & > input {
            height: 3rem;
          }

          & > button {
            height: 3rem;
            font-size: 2.5rem;
          }
        `}
        setInput={setMessageB}
      />
    </div>
  );
};

export default InputList;
