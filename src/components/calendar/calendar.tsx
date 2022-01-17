import React, { useState, createContext } from 'react';
import type { CalendarProps, CalendarLocation, CalendarContexts } from '../../types/calendar.interface';
import CalendarContents from './calendar-contents';
import Input from './date-input';
import { getMonth } from './utils';

export const CalendarContext = createContext<CalendarContexts>({
  selectedDate: new Date(),
  isCurrentYearMonth: true,
  calendarLocation: { year: new Date().getFullYear(), month: getMonth(new Date()) },
});

const Calendar = ({ date = new Date() }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(date);
  const [calendarLocation, setCalendarLocation] = useState<CalendarLocation>({
    year: date.getFullYear(),
    month: getMonth(date),
  });

  const isCurrentYearMonth =
    selectedDate.getFullYear() === calendarLocation.year && getMonth(selectedDate) === calendarLocation.month;

  return (
    <CalendarContext.Provider
      value={{ selectedDate, setSelectedDate, calendarLocation, setCalendarLocation, isCurrentYearMonth }}
    >
      <div className="fc-calendar">
        <Input />
        <CalendarContents />
      </div>
    </CalendarContext.Provider>
  );
};

export default Calendar;
