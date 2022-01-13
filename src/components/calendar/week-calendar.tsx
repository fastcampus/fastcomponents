import React from 'react';
import DateCalendar from './date-calendar';
import type { WeekCalendarProps } from 'src/types/calendar.interface';

const WeekCalendar = ({ startDate, cnt, leftPad }: WeekCalendarProps) => {
  const rightPad = 7 - leftPad - cnt;
  const leftEmptyBlockList = new Array(leftPad).fill(0).map((_, idx) => -idx);
  const dateBlockList = new Array(cnt).fill(0).map((_, idx) => startDate + idx);
  const rightEmptyBlockList = new Array(rightPad).fill(0).map((_, idx) => -idx);
  const dateList = [...leftEmptyBlockList, ...dateBlockList, ...rightEmptyBlockList];
  return (
    <div className="fc-week-calendar">
      {dateList.map((date: number) => {
        return <DateCalendar key={`${date}-${cnt}-${leftPad}`} dateNumber={date} />;
      })}
    </div>
  );
};

export default WeekCalendar;
