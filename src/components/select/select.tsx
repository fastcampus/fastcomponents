import React, { useState } from 'react';
import type { Value, Option, SelectProps } from '../../types/select.interface';

const Select = ({ options, setValue, isOptionUse = false, multiple = false }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<Value[]>(multiple ? [] : [options[0].innerHTML]);
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const setValueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (multiple) {
      const options = e.target.options;
      const selectedValues = [...options]
        .filter((option) => option.selected)
        .map((option) => {
          return option.value;
        });

      setSelectedValue(selectedValues);
      setValue(selectedValues);
      return;
    }
    setValue([e.target.value]);
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

  const optionClickHandler = (option: Option) => () => {
    // setValue(option.value);
    setSelectedValue((state) => [...state, option.innerHTML]);
    setIsOptionVisible(false);
  };

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
