import React, { useState } from 'react';
import { CustomSelectProps, Option } from 'src/types/select.interface';
import styled from '@emotion/styled';
import type { CustomSelectBlockProps } from '../../types/select.interface';
import useElementHeight from '../../hooks/useElementHeight';

const CustomSelectBlock = styled.div<CustomSelectBlockProps>`
  position: relative;
  & > .options {
    position: absolute;
    z-index: 1;
    visibility: ${({ isOptionVisible }) => (isOptionVisible ? 'visible' : 'hidden')};

    ${({ customOptionHeight, size }) => {
      if (size) {
        return `
          overflow: scroll;
          height: ${customOptionHeight * size}px;
        `;
      }
      return '';
    }}

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  & > .wrapper {
    display: ${({ isOptionVisible }) => (isOptionVisible ? 'block' : 'none')};
    position: fixed;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
`;

const CustomSelect = ({
  className,
  selectedValue,
  setSelectedValue,
  options,
  size,
  multiple,
  placeholder,
  disabled,
  ...restProps
}: CustomSelectProps) => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [customOptionHeight, customOptionRef] = useElementHeight();

  const previewClickHandler = () => {
    if (disabled) return;
    setIsOptionVisible((state) => !state);
  };

  const optionClickHandler = (option: Option) => () => {
    if (multiple) {
      setSelectedValue((state) => {
        const optionIdx = state.indexOf(option.value);
        if (optionIdx !== -1) {
          state.splice(optionIdx, 1);
          return [...state];
        }
        return [...state, option.value];
      });
      return;
    }
    setSelectedValue([option.value]);
    setIsOptionVisible(false);
  };

  return (
    <div className={`fc-select ${className}`} {...restProps}>
      <div
        className={`preview ${isOptionVisible ? 'open' : ''} ${disabled ? 'disabled' : ''}`}
        onClick={previewClickHandler}
      >
        {selectedValue.length > 0 ? selectedValue : placeholder}
      </div>

      <CustomSelectBlock customOptionHeight={customOptionHeight} size={size} isOptionVisible={isOptionVisible}>
        <div className="options">
          {options.map((option, idx) => (
            <div
              key={option.value}
              onClick={optionClickHandler(option)}
              className={selectedValue.includes(option.value) ? 'selected' : ''}
              ref={idx === 0 ? customOptionRef : null}
            >
              {option.label}
            </div>
          ))}
        </div>
        <div
          className="wrapper"
          onClick={() => {
            setIsOptionVisible(false);
          }}
        />
      </CustomSelectBlock>
    </div>
  );
};

export default CustomSelect;
