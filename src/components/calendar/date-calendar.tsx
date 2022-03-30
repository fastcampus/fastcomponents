import React, { useContext } from 'react';
import { DateUtil } from '@day1co/pebbles';
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

  const swapSelectedDate = (selectedEndDate) => {
    const tempSelectedEndDate = selectedEndDate;
    setSelectedEndDate && setSelectedEndDate(selectedDate);
    setSelectedDate && setSelectedDate(tempSelectedEndDate);
  };

  return (
    <div
      className={`date-calendar ${className} ${
        selectedDate?.getDate() === dateNumber || (selectedEndDate?.getDate() === dateNumber && isCurrentYearMonth)
          ? 'selected'
          : ''
      } ${
        selectedDate && selectedDate.getDate() < dateNumber && selectedEndDate && selectedEndDate.getDate() > dateNumber
          ? 'selected-range'
          : ''
      }`}
      onClick={() => {
        if (setSelectedEndDate && dateNumber > 0 && rangeDate && selectedDate && !selectedEndDate) {
          const newSelectedEndDate = new Date(`${calendarLocation.year}-${calendarLocation.month}-${dateNumber}`);
          if (DateUtil.diff(selectedDate, newSelectedEndDate, 'day') < 0) {
            swapSelectedDate(newSelectedEndDate);
            return;
          }
          setSelectedEndDate(newSelectedEndDate);
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
