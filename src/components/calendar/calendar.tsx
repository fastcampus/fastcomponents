import React, { useState, createContext, useEffect } from 'react';
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

const Calendar = ({
  date,
  endDate,
  setDate,
  setEndDate,
  navigator = false,
  dateinput = false,
  rangeDate = false,
  calendarLocation: calendarLocationProps,
  setCalendarLocation: setCalendarLocationProps,
}: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(date || null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(rangeDate ? (endDate ? endDate : null) : null);
  const [calendarLocation, setCalendarLocation] = useState<CalendarLocation>(
    calendarLocationProps || {
      year: date?.getFullYear() || new Date().getFullYear(),
      month: date ? date.getMonth() : new Date().getMonth() + 1,
    }
  );

  const isCurrentYearMonth = selectedDate
    ? selectedDate.getFullYear() === calendarLocation.year && getMonth(selectedDate) === calendarLocation.month
    : false;

  useEffect(() => {
    setDate && setDate(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    setEndDate && setEndDate(selectedEndDate);
  }, [selectedEndDate]);

  useEffect(() => {
    setSelectedDate && setSelectedDate(date || null);
  }, [date]);

  useEffect(() => {
    setSelectedEndDate && setSelectedEndDate(endDate || null);
  }, [endDate]);

  useEffect(() => {
    setCalendarLocationProps && setCalendarLocationProps(calendarLocation);
  }, [calendarLocation]);

  useEffect(() => {
    if (calendarLocationProps) {
      setCalendarLocation(calendarLocationProps);
    }
  }, [calendarLocationProps]);

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
