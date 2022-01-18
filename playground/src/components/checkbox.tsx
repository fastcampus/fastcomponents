import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Checkbox as FCCheckbox } from '../../../src';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h1
        css={css`
          font-size: 2rem;
        `}
      >
        Checkbox
      </h1>
      <div
        css={css`
          .fc-checkbox {
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
        <FCCheckbox checked={checked} disabled={false} setChecked={(value: boolean) => setChecked(value)} />
      </div>
    </>
  );
};

export default Checkbox;
