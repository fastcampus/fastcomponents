import React, { useContext } from 'react';
import { DateUtil } from '@day1co/pebbles';
import Input from '../input';
import { CalendarContext } from './calendar';
import { getMonth } from './utils';

const DateInput = () => {
  const { setCalendarLocation, setSelectedDate } = useContext(CalendarContext);
  const dateInputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!setCalendarLocation) return;
    if (!setSelectedDate) return;
    try {
      const typedDate = DateUtil.parse(e.target.value);
      setSelectedDate(typedDate);
      setCalendarLocation({ year: typedDate.getFullYear(), month: getMonth(typedDate) });
    } catch (err) {
      // nothing
    }
  };
  return <Input className="date-input" type="date" onChange={dateInputOnChangeHandler} />;
};

export default DateInput;
