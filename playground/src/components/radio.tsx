import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Radio as FCRadio } from '../../../src';

const Radio = () => {
  const [radioList, setRadioList] = useState([
    {
      label: '항목 1',
    },
    {
      label: '항목 2',
    },
    {
      label: '항목 3',
    },
  ]);
  const [selectedRadioValue, setSelectedRadioValue] = useState<string | number>('');

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
          & > div {
            display: flex;
            margin: 1rem;
          }
          .fc-radio {
            display: flex;
            background-color: red;
            width: 2rem;
            height: 2rem;
            input:checked + label {
              background-color: green;
            }
            input {
              width: 0;
              height: 0;
            }
          }
        `}
      >
        선택된 값 : {selectedRadioValue}
        {radioList.map((radio) => {
          return (
            <div key={radio.label}>
              <FCRadio
                checked={selectedRadioValue === radio.label}
                name={'test'}
                value={radio.label}
                label={radio.label}
                disabled={false}
                setValue={(value) => setSelectedRadioValue(value)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Radio;
