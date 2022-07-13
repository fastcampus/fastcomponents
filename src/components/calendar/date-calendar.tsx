import React, { useContext } from 'react';
import { DateUtil } from '@day1co/pebbles';
import { CalendarContext } from './calendar';
import type { DateCalendarProps } from 'src/types/calendar.interface';

const DateCalendar = ({ dateNumber, className }: DateCalendarProps) => {
  const {
    selectedDate,
    calendarLocation,
    setSelectedDate,
    selectedEndDate,
    setSelectedEndDate,
    disableSelect,
    rangeDate,
    renderDate,
  } = useContext(CalendarContext);

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
        if (disableSelect) return;
        if (setSelectedEndDate && dateNumber > 0 && rangeDate && selectedDate && !selectedEndDate) {
          const newSelectedEndDate = DateUtil.parse(
            `${calendarLocation.year}-${String(calendarLocation.month).padStart(2, '0')}-${String(dateNumber).padStart(
              2,
              '0'
            )}`
          );
          if (DateUtil.diff(selectedDate, newSelectedEndDate, 'day') < 0) {
            swapSelectedDate(newSelectedEndDate);
            return;
          }
          setSelectedEndDate(newSelectedEndDate);
          return;
        }
        if (setSelectedDate && dateNumber > 0) {
          setSelectedDate(
            DateUtil.parse(
              `${calendarLocation.year}-${String(calendarLocation.month).padStart(2, '0')}-${String(
                dateNumber
              ).padStart(2, '0')}`
            )
          );
          setSelectedEndDate && setSelectedEndDate(null);
          return;
        }
      }}
    >
      {dateNumber <= 0 ? '' : renderDate ? renderDate(dateNumber) : dateNumber}
    </div>
  );
};

export default DateCalendar;
