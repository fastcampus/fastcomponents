import React, { useContext } from 'react';
import { CalendarContext } from './calendar';
import type { DateCalendarProps } from 'src/types/calendar.interface';

const DateCalendar = ({ dateNumber, className }: DateCalendarProps) => {
  const { selectedDate, isCurrentYearMonth } = useContext(CalendarContext);
  return (
    <div
      className={`date-calendar ${className} ${
        selectedDate.getDate() === dateNumber && isCurrentYearMonth ? 'selected' : ''
      } `}
    >
      {dateNumber <= 0 ? '' : dateNumber}
    </div>
  );
};

export default DateCalendar;
