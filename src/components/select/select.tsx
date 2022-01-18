import React, { useEffect, useState } from 'react';
import type { Value, Option, SelectProps } from '../../types/select.interface';

const Select = ({ options, setValue, isOptionUse = false, multiple = true }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<Value[]>(multiple ? [] : [options[0].value]);
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);

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
      <select className="fc-select" onChange={setValueHandler} multiple={multiple}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.innerHTML}
          </option>
        ))}
      </select>
    );
  }

  if (multiple) {
    return (
      <div className="fc-select">
        <div className="preview">
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
      </div>
    );
  }

  return (
    <div className="fc-select">
      <div
        className="preview"
        onClick={() => {
          setIsOptionVisible((state) => {
            return !state;
          });
        }}
      >
        {selectedValue}
      </div>
      {isOptionVisible && (
        <div style={{ position: 'relative' }}>
          <div className="options" style={{ position: 'absolute', zIndex: 1 }}>
            {options.map((option) => (
              <div key={option.value} onClick={optionClickHandler(option)}>
                {option.innerHTML}
              </div>
            ))}
          </div>
          <div
            className="wrapper"
            style={{
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: 0,
            }}
            onClick={() => setIsOptionVisible(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Select;
