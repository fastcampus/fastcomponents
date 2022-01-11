import React, { SetStateAction } from 'react';
import type { SerializedStyles } from '@emotion/react';

export interface Input {
  style: SerializedStyles;
  setInput: React.Dispatch<SetStateAction<string>>;
  onSubmit?: React.MouseEventHandler<HTMLElement>;
}

const Input = ({ style, setInput, onSubmit }: Input) => (
  <div css={style}>
    <input onChange={(e) => setInput(e.target.value)} />
    <button onClick={onSubmit}>submit</button>
  </div>
);

export default Input;
