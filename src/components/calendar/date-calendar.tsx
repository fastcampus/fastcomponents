import React, { useContext } from 'react';
import { CalendarContext } from './calendar';
import type { DateCalendarProps } from 'src/types/calendar.interface';

const DateCalendar = ({ dateNumber, className }: DateCalendarProps) => {
  const {
    selectedDate,
    isCurrentYearMonth,
    calendarLocation,
    setSelectedDate,
    selectedEndDate,
    setSelectedEndDate,
    rangeDate,
  } = useContext(CalendarContext);
  return (
    <div
      className={`date-calendar ${className} ${
        selectedDate?.getDate() === dateNumber || (selectedEndDate?.getDate() === dateNumber && isCurrentYearMonth)
          ? 'selected'
          : ''
      } `}
      onClick={() => {
        if (setSelectedEndDate && dateNumber > 0 && rangeDate && selectedDate && !selectedEndDate) {
          setSelectedEndDate(new Date(`${calendarLocation.year}-${calendarLocation.month}-${dateNumber}`));
          return;
        }
        if (setSelectedDate && dateNumber > 0) {
          setSelectedDate(new Date(`${calendarLocation.year}-${calendarLocation.month}-${dateNumber}`));
          setSelectedEndDate && setSelectedEndDate(null);
          return;
        }
      }}
    >
      {dateNumber <= 0 ? '' : dateNumber}
    </div>
  );
};

export default DateCalendar;
