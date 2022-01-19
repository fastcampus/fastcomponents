import React, { useEffect, useState, useRef } from 'react';
import type { Value, Option, SelectProps } from '../../types/select.interface';
import styled from '@emotion/styled';

interface CustomSelectProp {
  customOptionHeight: number;
  size: number;
  isOptionVisible: boolean;
}
const CustomSelect = styled.div<CustomSelectProp>`
  position: relative;
  & > .options {
    opacity: ${({ isOptionVisible }) => (isOptionVisible ? '1' : '0')};
    z-index: ${({ isOptionVisible }) => (isOptionVisible ? '1' : '-1')};

    position: absolute;
    ${({ customOptionHeight, size }) => {
      if (size) {
        return `
          overflow: scroll;
          height: ${customOptionHeight * size}px;
        `;
      }
      return '';
    }}
  }

  & > .wrapper {
    display: ${({ isOptionVisible }) => (isOptionVisible ? 'block' : 'none')};
    position: fixed;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const Select = ({
  options,
  setValue,
  isOptionUse = false,
  multiple = true,
  size = 0,
  isAllSelect = false,
  setIsAllSelect,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<Value[]>(multiple ? [] : [options[0].value]);
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [customOptionHeight, setCustomOptionHeight] = useState(0);
  const customOptionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setValue(selectedValue);
    if (options.length === selectedValue.length) {
      setIsAllSelect(true);
    } else {
      setIsAllSelect(false);
    }
  }, [selectedValue]);

  useEffect(() => {
    if (customOptionsRef.current) {
      const optionDOM = customOptionsRef.current?.children[0] as HTMLDivElement;
      setCustomOptionHeight(optionDOM.offsetHeight);
    }
  }, [customOptionsRef.current]);

  useEffect(() => {
    if (isAllSelect) {
      setSelectedValue([...options.map((option) => option.value)]);
      return;
    }
    if (options.length === selectedValue.length) {
      setSelectedValue([]);
    }
  }, [isAllSelect]);

  const previewClickHandler = () => {
    setIsOptionVisible((state) => {
      return !state;
    });
  };

  const setValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (multiple) {
      const options = e.target.options;
      const selectedValues = [...options]
        .filter((option) => option.selected)
        .map((option) => {
          return option.value;
        });

      setSelectedValue(selectedValues);
      return;
    }
    setSelectedValue([e.target.value]);
  };

  const optionClickHandler = (option: Option) => () => {
    if (multiple) {
      setSelectedValue((state) => {
        const optionIdx = state.indexOf(option.value);
        if (optionIdx !== -1) {
          return [...state.slice(0, optionIdx), ...state.slice(optionIdx + 1, state.length)];
        }
        return [...state, option.value];
      });
      return;
    }
    setSelectedValue([option.value]);

    setIsOptionVisible(false);
  };

  if (isOptionUse) {
    return (
      <select className="fc-select" onChange={setValueHandler} multiple={multiple} size={size}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.innerHTML}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className="fc-select">
      <div className="preview" onClick={previewClickHandler}>
        {selectedValue}
      </div>

      <CustomSelect customOptionHeight={customOptionHeight} size={size} isOptionVisible={isOptionVisible}>
        <div className="options" ref={customOptionsRef}>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={optionClickHandler(option)}
              className={selectedValue.includes(option.value) ? 'selected' : ''}
            >
              {option.innerHTML}
            </div>
          ))}
        </div>
        <div
          className="wrapper"
          onClick={() => {
            setIsOptionVisible(false);
          }}
        ></div>
      </CustomSelect>
    </div>
  );
};

export default Select;
