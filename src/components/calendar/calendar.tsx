import React, { useState, createContext } from 'react';
import { DateUtil } from '@day1co/pebbles';
import type { CalendarProps } from '../../types/calendar.interface';
import Input from '../input';
import MonthCalendar from './month-calendar';

export const CalendarContext = createContext({ selectedDate: new Date(), isCurrentYearMonth: true });

const Calendar = ({ date = new Date() }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(date);
  const [CalendarLocation, setCalendarLocation] = useState<{ year: number; month: number }>({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });

  const increaseCalendarLocation = () => {
    setCalendarLocation((state) => {
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

  const decreaseCalendarLocation = () => {
    setCalendarLocation((state) => {
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
      setCalendarLocation({ year: typedDate.getFullYear(), month: typedDate.getMonth() + 1 });
    } catch (err) {
      // nothing
    }
  };

  const isCurrentYearMonth =
    selectedDate.getFullYear() === CalendarLocation.year && selectedDate.getMonth() + 1 === CalendarLocation.month;

  return (
    <CalendarContext.Provider value={{ selectedDate, isCurrentYearMonth }}>
      <div>
        <div>
          <button onClick={increaseCalendarLocation}>+</button>
          {CalendarLocation.year}-{CalendarLocation.month}
          <button onClick={decreaseCalendarLocation}>-</button>
          <Input type="date" onChange={dateInputOnChangeHandler} />
        </div>
        <MonthCalendar year={CalendarLocation.year} month={CalendarLocation.month} />
      </div>
    </CalendarContext.Provider>
  );
};

export default Calendar;
