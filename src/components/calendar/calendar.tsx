import React, { useState, createContext } from 'react';
import type { CalendarProps, CalendarLocation, CalendarContexts } from '../../types/calendar.interface';
import MonthCalendar from './month-calendar';
import Input from './date-input';

export const CalendarContext = createContext<CalendarContexts>({
  selectedDate: new Date(),
  isCurrentYearMonth: true,
  calendarLocation: { year: new Date().getFullYear(), month: new Date().getMonth() + 1 },
});

const Calendar = ({ date = new Date() }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(date);
  const [calendarLocation, setCalendarLocation] = useState<CalendarLocation>({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });

  const isCurrentYearMonth =
    selectedDate.getFullYear() === calendarLocation.year && selectedDate.getMonth() + 1 === calendarLocation.month;

  return (
    <CalendarContext.Provider
      value={{ selectedDate, setSelectedDate, calendarLocation, setCalendarLocation, isCurrentYearMonth }}
    >
      <div className="fc-calendar">
        <Input />
        <MonthCalendar year={calendarLocation.year} month={calendarLocation.month} />
      </div>
    </CalendarContext.Provider>
  );
};

export default Calendar;
