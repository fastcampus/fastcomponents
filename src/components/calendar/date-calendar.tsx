import React, { useContext } from 'react';
import { DateUtil } from '@day1co/pebbles';
import { CalendarContext } from './calendar';
import type { DateCalendarProps } from 'src/types/calendar.interface';

const DateCalendar = ({ dateNumber, className }: DateCalendarProps) => {
  const { selectedDate, calendarLocation, setSelectedDate, selectedEndDate, setSelectedEndDate, rangeDate } =
    useContext(CalendarContext);

  const currentDate =
    dateNumber > 0
      ? DateUtil.parse(
          `${calendarLocation.year}-${String(calendarLocation.month).padStart(2, '0')}-${String(dateNumber).padStart(
            2,
            '0'
          )}`
        )
      : null;

  const swapSelectedDate = (selectedEndDate: Date | null) => {
    const tempSelectedEndDate = selectedEndDate;
    setSelectedEndDate && setSelectedEndDate(selectedDate);
    setSelectedDate && setSelectedDate(tempSelectedEndDate);
  };

  return (
    <div
      className={`date-calendar ${className} ${
        currentDate &&
        ((selectedDate && DateUtil.diff(selectedDate, currentDate, 'day') === 0) ||
          (selectedEndDate && DateUtil.diff(selectedEndDate, currentDate, 'day') === 0))
          ? 'selected'
          : ''
      } ${
        currentDate &&
        selectedDate &&
        DateUtil.diff(selectedDate, currentDate, 'day') > 0 &&
        selectedEndDate &&
        DateUtil.diff(selectedEndDate, currentDate, 'day') < 0
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
