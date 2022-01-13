import React, { useContext } from 'react';
import { DateUtil } from '@day1co/pebbles';
import Input from '../input';
import { CalendarContext } from './calendar';

const navigator = () => {
  const { setSelectedDate, calendarLocation, setCalendarLocation } = useContext(CalendarContext);
  const increaseCalendarLocation = () => {
    if (!setCalendarLocation) return;
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
    if (!setCalendarLocation) return;
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
    if (!setCalendarLocation) return;
    if (!setSelectedDate) return;
    try {
      const typedDate = DateUtil.parse(e.target.value);
      setSelectedDate(typedDate);
      setCalendarLocation({ year: typedDate.getFullYear(), month: typedDate.getMonth() + 1 });
    } catch (err) {
      // nothing
    }
  };

  return (
    <div>
      <button onClick={increaseCalendarLocation}>+</button>
      {calendarLocation.year}-{calendarLocation.month}
      <button onClick={decreaseCalendarLocation}>-</button>
      <Input type="date" onChange={dateInputOnChangeHandler} />
    </div>
  );
};

export default navigator;
