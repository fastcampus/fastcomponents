import React from 'react';
import { DateUtil } from '@day1co/pebbles';
import WeekCalendar from './week-calendar';
import type { MonthCalendarProps } from 'src/types/calendar.interface';

const MonthCalendar = ({ year, month }: MonthCalendarProps) => {
  const date = new Date(`${year}-${month}-01`);
  const leftPad = date.getDay();
  const monthLastDate = DateUtil.endOfMonth(date).getDate();
  const secondWeekStartDate = 8 - leftPad;
  const dateCnt = 7 - leftPad;
  const weekCnt = Math.floor((monthLastDate - secondWeekStartDate) / 7) + 2;

  const WeekCalendarList = new Array(weekCnt).fill(0).map((_, idx) => {
    const startDate = secondWeekStartDate + 7 * (idx - 1);
    const nextWeekStartDate = startDate + 7;
    const isLastWeek = nextWeekStartDate > monthLastDate;
    const lastWeekDateCnt = monthLastDate - startDate + 1;

    if (idx === 0) {
      return <WeekCalendar key={`${year}-${month}`} startDate={1} cnt={dateCnt} leftPad={leftPad} />;
    }
    if (isLastWeek) {
      return <WeekCalendar key={`${year}-${month}-${idx}`} startDate={startDate} cnt={lastWeekDateCnt} leftPad={0} />;
    }
    return <WeekCalendar key={`${year}-${month}-${idx}`} startDate={startDate} cnt={7} leftPad={0} />;
  });
  return <div className="month-calendar">{WeekCalendarList}</div>;
};
export default MonthCalendar;
