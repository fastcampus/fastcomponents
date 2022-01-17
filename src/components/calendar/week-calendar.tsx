import React from 'react';
import DateCalendar from './date-calendar';
import type { WeekCalendarProps } from 'src/types/calendar.interface';
import { DAY_COUNT_OF_ONE_WEEK } from './utils';

const WeekCalendar = ({ startDate, dateCnt, leftPad }: WeekCalendarProps) => {
  const rightPad = DAY_COUNT_OF_ONE_WEEK - leftPad - dateCnt;
  const leftEmptyBlockList = new Array(leftPad).fill(0).map((_, idx) => -idx);
  const dateBlockList = new Array(dateCnt).fill(0).map((_, idx) => startDate + idx);
  const rightEmptyBlockList = new Array(rightPad).fill(0).map((_, idx) => -idx);
  const dateList = [...leftEmptyBlockList, ...dateBlockList, ...rightEmptyBlockList];
  return (
    <div className="week-calendar">
      {dateList.map((date: number) => {
        return <DateCalendar key={`${date}-${dateCnt}-${leftPad}`} dateNumber={date} />;
      })}
    </div>
  );
};

export default WeekCalendar;
