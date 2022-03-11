import React, { useState } from 'react';
import { css } from '@emotion/react';
import type { Option, Value } from '../../../src/types/select.interface';
import { Select as FCSelect } from '../../../src';
import { Checkbox as FCCheckbox } from '../../../src';

const Select = ({
  nativeSelect = false,
  multiple = false,
  size = 0,
  initialSelectedValue,
}: {
  nativeSelect?: boolean;
  multiple?: boolean;
  size?: number;
  initialSelectedValue?: Value | Value[];
}) => {
  const [selectedOption, setSelectedOption] = useState<Value[]>([]);
  const [isAllSelect, setIsAllSelect] = useState<boolean>(false);
  const optionList: Option[] = [
    {
      value: 'a',
      label: 'a 선택하기',
    },
    {
      value: 2,
      label: '2 선택하기',
    },
    {
      value: 3,
      label: '3 선택하기',
    },
    {
      value: 4,
      label: '4 선택하기',
    },
    {
      value: 5,
      label: '5 선택하기',
    },
    {
      value: 6,
      label: '6 선택하기',
    },
    {
      value: 7,
      label: '7 선택하기',
    },
    {
      value: 8,
      label: '8 선택하기',
    },
    {
      value: 9,
      label: '9 선택하기',
    },
    {
      value: 10,
      label: '10 선택하기',
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
            .preview {
              height: 2rem;
            }
            .selected {
              background-color: rgba(0, 255, 0, 0.2);
            }
            .options {
              background-color: gray;
              padding: 0 1rem;
              border: 0.2rem solid gray;
              top: -2rem;
              & > div {
                font-size: 2rem;
                &:hover {
                  color: white;
                }
              }
            }
          }
        `}
      >
        <div>선택된 값 : {selectedOption}</div>
        {multiple && <FCCheckbox checked={isAllSelect} setChecked={setIsAllSelect} disabled={false} />}
        <FCSelect
          initialSelectedValue={initialSelectedValue}
          options={optionList}
          setValue={(values) => setSelectedOption(values)}
          nativeSelect={nativeSelect}
          multiple={multiple}
          size={size}
          selectAll={isAllSelect}
          setSelectAll={setIsAllSelect}
        />
      </div>
    </>
  );
};

export default Select;
