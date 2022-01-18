import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Radio as FCRadio } from '../../../src';

const Radio = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h1
        css={css`
          font-size: 2rem;
        `}
      >
        Radio
      </h1>
      <div
        css={css`
          .fc-radio {
            display: inline-block;
            width: 10rem;
            height: 10rem;
            input {
              width: 0rem;
              height: 0rem;
            }
            &.checked {
              background-color: green;
            }
            background-color: red;
          }
        `}
      >
        <FCRadio checked={checked} disabled={false} setChecked={(value: boolean) => setChecked(value)} />
      </div>
    </>
  );
};

export default Radio;
