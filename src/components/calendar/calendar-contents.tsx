import React, { useContext } from 'react';
import Navigator from './navigator';
import MonthCalendar from './month-calendar';
import { CalendarContext } from './calendar';

const CalendarContents = ({ navigator }: { navigator: boolean }) => {
  const { calendarLocation } = useContext(CalendarContext);
  return (
    <div className="calendar-contents">
      {navigator && <Navigator />}
      <MonthCalendar year={calendarLocation.year} month={calendarLocation.month} />
    </div>
  );
};

export default CalendarContents;
