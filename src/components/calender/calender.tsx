import React, { useState, createContext } from 'react';
import { DateUtil } from '@day1co/pebbles';
import type { CalenderProps } from '../../types/calender.interface';
import Input from '../input';
import MonthCalender from './month-calender';

export const CalenderContext = createContext({ selectedDate: new Date(), isCurrentYearMonth: true });

const Calender = ({ date = new Date() }: CalenderProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(date);
  const [CalenderLocation, setCalenderLocation] = useState<{ year: number; month: number }>({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });

  const increaseCalenderLocation = () => {
    setCalenderLocation((state) => {
      if (state.month === 12) {
        return {
          year: state.year + 1,
          month: 1,
        };
      }
      return {
        ...state,
        month: state.month + 1,
      };
    });
  };

  const decreaseCalenderLocation = () => {
    setCalenderLocation((state) => {
      if (state.month === 1) {
        return {
          year: state.year - 1,
          month: 12,
        };
      }
      return {
        ...state,
        month: state.month - 1,
      };
    });
  };

  const dateInputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const typedDate = DateUtil.parse(e.target.value);
      setSelectedDate(typedDate);
      setCalenderLocation({ year: typedDate.getFullYear(), month: typedDate.getMonth() + 1 });
    } catch (err) {
      // nothing
    }
  };

  const isCurrentYearMonth =
    selectedDate.getFullYear() === CalenderLocation.year && selectedDate.getMonth() + 1 === CalenderLocation.month;

  return (
    <CalenderContext.Provider value={{ selectedDate, isCurrentYearMonth }}>
      <div>
        <div>
          <button onClick={increaseCalenderLocation}>+</button>
          {CalenderLocation.year}-{CalenderLocation.month}
          <button onClick={decreaseCalenderLocation}>-</button>
          <Input type="date" onChange={dateInputOnChangeHandler} />
        </div>
        <MonthCalender year={CalenderLocation.year} month={CalenderLocation.month} />
      </div>
    </CalenderContext.Provider>
  );
};

export default Calender;
