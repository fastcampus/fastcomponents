import React, { useContext } from 'react';
import { CalendarContext } from './calendar';

const navigator = () => {
  const { calendarLocation, setCalendarLocation } = useContext(CalendarContext);
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

  return (
    <div className="navigator">
      <button onClick={increaseCalendarLocation}>+</button>
      <div>
        {calendarLocation.year}-{calendarLocation.month}
      </div>
      <button onClick={decreaseCalendarLocation}>-</button>
    </div>
  );
};

export default navigator;
