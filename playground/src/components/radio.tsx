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
          .fc-radio {
            display: inline-block;
          }
        `}
      >
        선택된 값 : {selectedRadioValue}
        {radioList.map((radio) => {
          return (
            <div key={radio.label}>
              <FCRadio
                name={'test'}
                value={radio.label}
                disabled={false}
                setValue={(value) => setSelectedRadioValue(value)}
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
