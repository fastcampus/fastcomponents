import React, { useContext } from 'react';
import { CalenderContext } from './calender';
import type { DateCalenderProps } from 'src/types/calender.interface';

const DateCalender = ({ dateNumber }: DateCalenderProps) => {
  const { selectedDate, isCurrentYearMonth } = useContext(CalenderContext);
  return (
    <div
      className={`fastcomp-date-calender ${
        selectedDate.getDate() === dateNumber && isCurrentYearMonth ? 'selected' : ''
      } `}
    >
      {dateNumber <= 0 ? '' : dateNumber}
    </div>
  );
};

export default DateCalender;
