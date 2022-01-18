import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Radio as FCRadio } from '../../../src';

const Radio = () => {
  const [radioList, setRadioList] = useState([
    {
      checked: false,
      label: '항목 1',
    },
    {
      checked: false,
      label: '항목 2',
    },
    {
      checked: false,
      label: '항목 3',
    },
  ]);
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
            &.checked {
              background-color: green;
            }
            background-color: red;
          }
        `}
      >
        {radioList.map((radio, idx) => {
          return (
            <div key={radio.label}>
              <FCRadio
                checked={radio.checked}
                disabled={false}
                setChecked={(value: boolean) =>
                  setRadioList((state) => {
                    const newState = state.map((v) => ({
                      ...v,
                      checked: false,
                    }));
                    newState[idx].checked = value;
                    return [...newState];
                  })
                }
              />
              <span>{radio.label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Radio;
