import React from 'react';
import DateCalender from './date-calender';
import type { WeekCalenderProps } from 'src/types/calender.interface';

const WeekCalender = ({ startDate, cnt, leftPad }: WeekCalenderProps) => {
  const rightPad = 7 - leftPad - cnt;
  const leftEmptyBlockList = new Array(leftPad).fill(0).map((_, idx) => -idx);
  const dateBlockList = new Array(cnt).fill(0).map((_, idx) => startDate + idx);
  const rightEmptyBlockList = new Array(rightPad).fill(0).map((_, idx) => -idx);
  const dateList = [...leftEmptyBlockList, ...dateBlockList, ...rightEmptyBlockList];
  return (
    <div className="fastcomp-week-calender">
      {dateList.map((date: number) => {
        return <DateCalender key={`${date}-${cnt}-${leftPad}`} dateNumber={date} />;
      })}
    </div>
  );
};

export default WeekCalender;
