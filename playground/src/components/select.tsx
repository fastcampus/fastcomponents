import React, { useState } from 'react';
import { css } from '@emotion/react';
import type { Option, Value } from '../../../src/types/select.interface';
import { Select as FCSelect } from '../../../src';

const Select = ({ isOptionUse, multiple = false }: { isOptionUse: boolean; multiple?: boolean }) => {
  const [selectedOption, setSelectedOption] = useState<Value[]>([]);
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
            .selected {
              background-color: rgba(0, 255, 0, 0.2);
            }
            .options {
              background-color: gray;
              padding: 1rem;
              border: 0.2rem solid gray;
              top: -2rem;
              & > div {
                font-size: 2rem;
                margin: 0.5rem 0;
                &:hover {
                  color: white;
                }
              }
            }
          }
        `}
      >
        <div>선택된 값 : {selectedOption}</div>
        <FCSelect
          options={optionList}
          setValue={(values) => setSelectedOption(values)}
          isOptionUse={isOptionUse}
          multiple={multiple}
        />
      </div>
    </>
  );
};

export default Select;
