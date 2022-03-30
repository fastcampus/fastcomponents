import React, { useState, createContext } from 'react';
import type { CalendarProps, CalendarLocation, CalendarContexts } from '../../types/calendar.interface';
import CalendarContents from './calendar-contents';
import Input from './date-input';
import { getMonth } from './utils';

export const CalendarContext = createContext<CalendarContexts>({
  selectedDate: new Date(),
  isCurrentYearMonth: true,
  calendarLocation: { year: new Date().getFullYear(), month: getMonth(new Date()) },
  rangeDate: false,
});

const Calendar = ({ date, endDate, navigator = false, dateinput = false, rangeDate = false }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(date || null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(rangeDate ? (endDate ? endDate : null) : null);
  const [calendarLocation, setCalendarLocation] = useState<CalendarLocation>({
    year: date?.getFullYear() || new Date().getFullYear(),
    month: date ? getMonth(date) : new Date().getMonth() + 1,
  });

  const isCurrentYearMonth = selectedDate
    ? selectedDate.getFullYear() === calendarLocation.year && getMonth(selectedDate) === calendarLocation.month
    : false;

  return (
    <CalendarContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        setSelectedEndDate,
        calendarLocation,
        setCalendarLocation,
        isCurrentYearMonth,
        selectedEndDate,
        rangeDate,
      }}
    >
      <div className="fc-calendar">
        {dateinput && <Input />}
        <CalendarContents navigator={navigator} />
      </div>
    </CalendarContext.Provider>
  );
};

export default Calendar;
