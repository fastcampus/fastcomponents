import React from 'react';
import { DateUtil } from '@day1co/pebbles';
import WeekCalendar from './week-calendar';
import type { MonthCalendarProps } from 'src/types/calendar.interface';
import { DAY_COUNT_OF_ONE_WEEK } from './utils';

const MonthCalendar = ({ year, month }: MonthCalendarProps) => {
  const date = new Date(`${year}-${month}-01`);
  const firstWeekLeftPad = date.getDay();
  const notFirstWeekLeftPad = 0;

  const monthLastDate = DateUtil.endOfMonth(date).getDate();
  const secondWeekStartDate = DAY_COUNT_OF_ONE_WEEK + 1 - firstWeekLeftPad;
  const firstWeekDateCnt = DAY_COUNT_OF_ONE_WEEK - firstWeekLeftPad;
  const weekCnt = Math.ceil((monthLastDate + firstWeekLeftPad) / DAY_COUNT_OF_ONE_WEEK);

  const WeekCalendarList = new Array(weekCnt).fill(0).map((_, weekOrder) => {
    const startDate = secondWeekStartDate + DAY_COUNT_OF_ONE_WEEK * (weekOrder - 1);
    const nextWeekStartDate = startDate + DAY_COUNT_OF_ONE_WEEK;
    const isLastWeek = nextWeekStartDate > monthLastDate;
    const lastWeekDateCnt = monthLastDate - startDate + 1;

    if (weekOrder === 0) {
      return (
        <WeekCalendar key={`${year}-${month}`} startDate={1} dateCnt={firstWeekDateCnt} leftPad={firstWeekLeftPad} />
      );
    }
    if (isLastWeek) {
      return (
        <WeekCalendar
          key={`${year}-${month}-${weekOrder}`}
          startDate={startDate}
          dateCnt={lastWeekDateCnt}
          leftPad={notFirstWeekLeftPad}
        />
      );
    }
    return (
      <WeekCalendar
        key={`${year}-${month}-${weekOrder}`}
        startDate={startDate}
        dateCnt={7}
        leftPad={notFirstWeekLeftPad}
      />
    );
  });
  return <div className="month-calendar">{WeekCalendarList}</div>;
};
export default MonthCalendar;
