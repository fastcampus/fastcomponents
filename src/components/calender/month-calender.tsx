import React from 'react';
import WeekCalender from './week-calender';
import type { MonthCalenderProps } from 'src/types/calender.interface';
import { DateUtil } from '@day1co/pebbles';

const MonthCalender = ({ year, month }: MonthCalenderProps) => {
  const date = new Date(`${year}-${month}-01`);
  const leftPad = date.getDay();
  const monthLastDate = DateUtil.endOfMonth(date).getDate();
  const secondWeekStartDate = 8 - leftPad;
  const WeekCalenderList = [
    <WeekCalender key={`${year}-${month}`} startDate={1} cnt={7 - leftPad} leftPad={leftPad} />,
  ];

  for (let i = 0; i * 7 + secondWeekStartDate <= monthLastDate; ++i) {
    const startDate = secondWeekStartDate + 7 * i;
    const nextWeekStartDate = startDate + 7;
    if (nextWeekStartDate > monthLastDate) {
      WeekCalenderList.push(
        <WeekCalender
          key={`${year}-${month}-${i}`}
          startDate={startDate}
          cnt={monthLastDate - startDate + 1}
          leftPad={0}
        />
      );
    } else {
      WeekCalenderList.push(<WeekCalender key={`${year}-${month}-${i}`} startDate={startDate} cnt={7} leftPad={0} />);
    }
  }
  return <div>{WeekCalenderList}</div>;
};
export default MonthCalender;
