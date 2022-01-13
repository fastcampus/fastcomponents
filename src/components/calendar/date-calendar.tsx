import React, { useContext } from 'react';
import { CalendarContext } from './calendar';
import type { DateCalendarProps } from 'src/types/calendar.interface';

const DateCalendar = ({ dateNumber }: DateCalendarProps) => {
  const { selectedDate, isCurrentYearMonth } = useContext(CalendarContext);
  return (
    <div
      className={`fc-date-calendar ${selectedDate.getDate() === dateNumber && isCurrentYearMonth ? 'selected' : ''} `}
    >
      {dateNumber <= 0 ? '' : dateNumber}
    </div>
  );
};

export default DateCalendar;
