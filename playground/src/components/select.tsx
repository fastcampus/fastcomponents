import React, { useState } from 'react';
import { css } from '@emotion/react';
import type { Option } from '../../../src/types/select.interface';
import { Select as FCSelect } from '../../../src';

const Select = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const optionList: Option[] = [
    {
      value: 'a',
      innerHTML: 'a 선택하기',
    },
    {
      value: 2,
      innerHTML: '2 선택하기',
    },
  ];
  return (
    <>
      <h1
        css={css`
          font-size: 2rem;
        `}
      >
        Select
      </h1>
      <div
        css={css`
          .fc-select {
            border: 0.2rem solid black;
          }
        `}
      >
        <div>선택된 값 : {selectedOption}</div>
        <FCSelect options={optionList} setValue={(value) => setSelectedOption(value)} />
      </div>
    </>
  );
};

export default Select;
