import React from 'react';
import { DateUtil } from '@day1co/pebbles';
import WeekCalendar from './week-calendar';
import Navigator from './navigator';
import type { MonthCalendarProps } from 'src/types/calendar.interface';

const MonthCalendar = ({ year, month }: MonthCalendarProps) => {
  const date = new Date(`${year}-${month}-01`);
  const leftPad = date.getDay();
  const monthLastDate = DateUtil.endOfMonth(date).getDate();
  const secondWeekStartDate = 8 - leftPad;
  const dateCnt = 7 - leftPad;
  const WeekCalendarList = [<WeekCalendar key={`${year}-${month}`} startDate={1} cnt={dateCnt} leftPad={leftPad} />];

  for (let i = 0; i * 7 + secondWeekStartDate <= monthLastDate; ++i) {
    const startDate = secondWeekStartDate + 7 * i;
    const nextWeekStartDate = startDate + 7;
    if (nextWeekStartDate > monthLastDate) {
      WeekCalendarList.push(
        <WeekCalendar
          key={`${year}-${month}-${i}`}
          startDate={startDate}
          cnt={monthLastDate - startDate + 1}
          leftPad={0}
        />
      );
    } else {
      WeekCalendarList.push(<WeekCalendar key={`${year}-${month}-${i}`} startDate={startDate} cnt={7} leftPad={0} />);
    }
  }
  return (
    <div>
      <Navigator />
      {WeekCalendarList}
    </div>
  );
};
export default MonthCalendar;
