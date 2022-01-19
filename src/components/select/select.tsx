import React, { useEffect, useState, useRef } from 'react';
import type { Value, Option, CustomSelectProps, SelectProps } from '../../types/select.interface';
import styled from '@emotion/styled';
import useElementHeight from './hooks/useElementHeight';
import SelectUseOption from './select-use-option';

const CustomSelect = styled.div<CustomSelectProps>`
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
  const [customOptionHeight, customOptionRef] = useElementHeight();
  const isAllSelected = options.length === selectedValue.length;

  useEffect(() => {
    setValue(selectedValue);
    setIsAllSelect(isAllSelected);
  }, [selectedValue]);

  useEffect(() => {
    if (isAllSelect) {
      setSelectedValue([...options.map((option) => option.value)]);
      return;
    }
    if (isAllSelected) {
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
      <SelectUseOption
        setValueHandler={setValueHandler}
        multiple={multiple}
        options={options}
        isAllSelect={isAllSelect}
        size={size}
      />
    );
  }

  return (
    <div className="fc-select">
      <div className="preview" onClick={previewClickHandler}>
        {selectedValue}
      </div>

      <CustomSelect customOptionHeight={customOptionHeight} size={size} isOptionVisible={isOptionVisible}>
        <div className="options">
          {options.map((option, idx) => (
            <div
              key={option.value}
              onClick={optionClickHandler(option)}
              className={selectedValue.includes(option.value) ? 'selected' : ''}
              ref={idx === 0 ? customOptionRef : null}
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
