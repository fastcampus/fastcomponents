import React, { useContext } from 'react';
import { CalendarContext } from './calendar';
import { getPrevMonthLocation, getNextMonthLocation } from './utils';

const navigator = () => {
  const { calendarLocation, setCalendarLocation } = useContext(CalendarContext);
  const increaseCalendarLocation = () => {
    if (!setCalendarLocation) return;
    setCalendarLocation((state) => getNextMonthLocation(state));
  };

  const decreaseCalendarLocation = () => {
    if (!setCalendarLocation) return;
    setCalendarLocation((state) => getPrevMonthLocation(state));
  };

  return (
    <div className="navigator">
      <button onClick={decreaseCalendarLocation}>-</button>
      <div>
        {calendarLocation.year}-{calendarLocation.month}
      </div>
      <button onClick={increaseCalendarLocation}>+</button>
    </div>
  );
};

export default navigator;
